const express = require("express");
const router = express?.Router();
const getUserData = require("../middleware/getUser");
const Notes = require("../models/Notes");

//API 1 : Fetch all notes associated with user
router.get("/fetchallnotes", getUserData, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.id });
    res.send({ status: 200, description: "SuccessFul", notes });
  } catch (error) {
    res.status(500).send({description: "Internal Server Error."})
  }
});

module.exports = router;
