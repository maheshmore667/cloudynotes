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
  (req, res) => {
    try {
      console.log(req.body);
      const user = new User(req.body);
      const result = validationResult(req);
      if (result.isEmpty()) {
        user.save();
        res.send({ status: 200, description: "SuccessFul" });
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
