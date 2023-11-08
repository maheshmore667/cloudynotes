import { useState } from "react";
import NoteContext from "./noteContext"

const NoteState =(props) => {
    const initialNotes = []
    const [notes, setNote] = useState(initialNotes)
   

      //fetch all notes
      const fetchNote = async() =>{
        const host = "http://localhost:4000"
        //auth token mocked for now
        const responseAll = await fetch(`${host}/api/notes/fetchallnotes`, {
          method : 'GET',
          headers : {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiJ9.NjRiZTZlNDZhZjNjNzk1ODAzMzJiMDNk.mu3wD9HnJ6Y7oEScyvFykKn-wDV2vBj7XauRCvVTouU"
          }
        })
        const fetchedData = await responseAll.json();
        setNote(fetchedData.notes);
      }

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
        <NoteContext.Provider value={{notes, addNote, deleteNote, fetchNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;