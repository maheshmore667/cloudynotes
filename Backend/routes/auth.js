const express = require("express");
const router = express?.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

//validation layer added
router.post(
  "/createUser",
  body("email", "please enter a valid email").isEmail(),
  body("name", "please enter a valid name").isLength(3),
  body("password", "please enter a valid password").isLength(3),
  async (req, res) => {
    try {
      console.log(req.body);
      const result = validationResult(req);
      if (result.isEmpty()) {
        //check if the user already exists
        let user = await User.findOne({ email: req?.body?.email });
        if (user) {
          res
            .status(400)
            .send({ description: "User already exist with the email" });
        } else {
          User.create({
            name: req?.body?.name,
            password: req?.body?.password,
            email: req?.body?.email,
          })
            .then((response) => {
              res.send({ status: 200, description: "SuccessFul" });
            })
            .catch((error) => {
              console.log(error);
              res.status(500).json(error);
            });
        }
      } else {
        res.send({ description: "invalid payload", errors: result.array() });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
);

module.exports = router;
