const express = require("express");
const router = express?.Router();
const getUserData = require("../middleware/getUser");
const Notes = require("../models/Notes");
const {body, validationResult} = require('express-validator')

//API 1 : Fetch all notes associated with user
router.get("/fetchallnotes", getUserData, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.id });
    res.send({ status: 200, description: "SuccessFul", notes });
  } catch (error) {
    res.status(500).send({description: "Internal Server Error."})
  }
});

//API 2 : Add the notes
router.post("/savenote", getUserData, [
    body("title", "Title length should be more than 3").isLength({min : 3}),
    body("description", "Description length should be more than 3").isLength({min : 3}),
    body("author", "Author cannot be empty").exists()
], async (req, res) => {
    try {
        //destructuring
        const {title, description, tag, author} = req.body;
        //checking for the request body value errors
        const result = validationResult(req);
      if(result.isEmpty()){
        var notes = new Notes({
           title, tag, description, author, user : req.id 
        })
        const savedNote = await notes?.save();
        res.status(200).send({description: "Notes saved successfully" , note  : savedNote});
      } else {
        //if body has the errors
        res.status(200).send({description: "Please enter the correct details"})
      }
    } catch (error) {
      res.status(500).send({description: "Internal Server Error."})
    }
  });

module.exports = router;
