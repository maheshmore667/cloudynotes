import { useState } from "react";
import NoteContext from "./noteContext"

const NoteState =(props) => {
    const initialNotes =[
        {
          "_id": "64bff480a473e7e4ce06531a",
          "user": "64be6e46af3c79580332b03d",
          "title": "React Learning",
          "description": "For switch the react hands on is important",
          "tag": "Im",
          "author": "Mahesh More",
          "date": "2023-07-25T16:12:48.921Z",
          "__v": 0
        },
        {
          "_id": "64bff482a473e7e4sdace06531c",
          "user": "64be6e46af3c79580332b03d",
          "title": "React Learning",
          "description": "For switch the react hands on is important",
          "tag": "Im",
          "author": "Mahesh More",
          "date": "2023-07-25T16:12:50.706Z",
          "__v": 0
        }
        ,
        {
          "_id": "64bff482a473e7e4ce06531c",
          "user": "64be6e46af3c79580332b03d",
          "title": "React Learning",
          "description": "For switch the react hands on is important",
          "tag": "Im",
          "author": "Mahesh More",
          "date": "2023-07-25T16:12:50.706Z",
          "__v": 0
        } ,
        {
          "_id": "64bff482a473e7e4ce06fsd531c",
          "user": "64be6e46af3c79580332b03d",
          "title": "React Learning",
          "description": "For switch the react hands on is important",
          "tag": "Im",
          "author": "Mahesh More",
          "date": "2023-07-25T16:12:50.706Z",
          "__v": 0
        }
      ];
      const [notes, setNote] = useState(initialNotes);

      //Add the note
      const addNote = (tag, description, title) =>{
        //call the API
        const additionalNote = {
          "_id": "64bff482a473e7e423ererce06531c",
          "user": "64be6e46af3c79580332b03d",
          "title": title,
          "description":description,
          "tag": tag,
          "author": "Mahesh More",
          "date": "2023-07-25T16:12:50.706Z",
          "__v": 0
        }
        setNote(notes.concat(additionalNote));
      }

      //delete the node
      const deleteNote = (id) =>{
        //Todo : API call
        const newNotes = notes.filter((note)=>{
          return note._id !== id;
        })
        setNote(newNotes);
      }
    return(
        <NoteContext.Provider value={{notes, addNote, deleteNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;