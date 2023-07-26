const express = require("express");
const router = express?.Router();
const getUserData = require("../middleware/getUser");
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");

//API 1 : Fetch all notes associated with user
router.get("/fetchallnotes", getUserData, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.id });
    res.send({ status: 200, description: "SuccessFul", notes });
  } catch (error) {
    res.status(500).send({ description: "Internal Server Error." });
  }
});

//API 2 : Add the notes
router.post(
  "/savenote",
  getUserData,
  [
    body("title", "Title length should be more than 3").isLength({ min: 3 }),
    body("description", "Description length should be more than 3").isLength({
      min: 3,
    }),
    body("author", "Author cannot be empty").exists(),
  ],
  async (req, res) => {
    try {
      //destructuring
      const { title, description, tag, author } = req.body;
      //checking for the request body value errors
      const result = validationResult(req);
      if (result.isEmpty()) {
        var notes = new Notes({
          title,
          tag,
          description,
          author,
          user: req.id,
        });
        const savedNote = await notes?.save();
        res
          .status(200)
          .send({ description: "Notes saved successfully", note: savedNote });
      } else {
        //if body has the errors
        res
          .status(200)
          .send({ description: "Please enter the correct details" });
      }
    } catch (error) {
      res.status(500).send({ description: "Internal Server Error." });
    }
  }
);

//API 3 : Update the note
router.put("/updatenote/:id", getUserData, async (req, res) => {
  try {
    //getting data from the
    const { title, description, tag, author } = req.body;

    //checking if the note is already present or not in the DB
    const presentNote = await Notes.findById(req.params.id);
    if (!presentNote) {
      return res.status(404).send({ description: "Note not found !!" });
    }

    //checking if the user updating his own notes
    if (presentNote.user.toString() != req.id) {
      return res
        .status(401)
        .send({ description: "ERROR : User mastermapping" });
    }

    //upadting the note with the input request body
    let newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }
    if (author) {
      newNote.author = author;
    }

    const updatenote = await Notes.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );

    return res.status(200).send({ Description: "Note updated successfully" });
  } catch (error) {
    res.status(500).send({ description: "Internal server error" });
  }
});

module.exports = router;
