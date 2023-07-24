const express = require("express");
const router = express?.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fetchUserData = require("../middleware/getUser");

//validation layer added

//API1 : create user API
router.post(
  "/createUser",
  body("email", "please enter a valid email").isEmail(),
  body("name", "please enter a valid name").isLength(3),
  body("password", "please enter a valid password").isLength(3),
  async (req, res) => {
    try {
      const result = validationResult(req);
      if (result.isEmpty()) {
        //check if the user already exists
        let user = await User.findOne({ email: req?.body?.email });
        if (user) {
          res
            .status(400)
            .send({ description: "User already exist with the email" });
        } else {
          //securing the password using hashing and other bcyprt password to bypass
          //cybersecurity attack
          var secPassword = await bcrypt.hash(
            req?.body?.password,
            await bcrypt.genSalt(10)
          );
          const data = {
            user: {
              id: User?.id,
            },
          };
          const authToken = jwt?.sign(data, "C");
          User.create({
            name: req?.body?.name,
            password: secPassword,
            email: req?.body?.email,
          })
            .then((response) => {
              res.send({ status: 200, description: "SuccessFul", authToken });
            })
            .catch((error) => {
              res.status(500).json(error);
            });
        }
      } else {
        res.send({ description: "invalid payload", errors: result.array() });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

//API2 : login user API
router.post(
  "/login",
  body("email", "please enter a valid email").isEmail(),
  body("password", "Please enter the password").exists(),
  async (req, res) => {
    try {
      const result = validationResult(req);
      if (result.isEmpty()) {
        //finding the user with entered credentials
        let user = await User.findOne({ email: req?.body?.email });

        //if user exists
        if (user) {
          //check password
          const passwordCompare = await bcrypt?.compare(
            req.body?.password,
            user.password
          );
          if (passwordCompare) {
            const data = {
              user: {
                id: user?.id,
              },
            };
            const authToken = jwt?.sign(user?.id, "C");
            res.status(200).send({ message: "Success", authToken });
          } else {
            res
              .status(400)
              .send({ description: "Please enter the valid credentials" });
          }
        } else {
          res
            .status(400)
            .send({
              description: "Please enter the valid credentials of valid user",
            });
        }
      } else {
        res
          .status(400)
          .send({ description: "Please enter the valid credentials" });
      }
    } catch (error) {
      res.status(500).send({ description: "Internal server error" });
    }
  }
);

//API3 : get user data API
router.post("/getUserData", fetchUserData, async (req, res) => {
  //getting the desired user by it's ID without it's password.
  try {
    const user = await User.findById(req.id).select("-password");
    if (!user) {
      return res.status(401).send({ description: "Invalid user data" });
    }
    return res.status(200).send({ user: user });
  } catch (error) {
    res.status(500).send({ description: "Internal server error" });
  }
});

module.exports = router;
