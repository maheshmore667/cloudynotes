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
      const addNote = async(tag, description, title) =>{
          const host = "http://localhost:4000"
          //auth token mocked for now
          const response = await fetch(`${host}/api/notes/savenote`, {
            method : 'POST',
            headers : {
              "Content-Type": "application/json",
              "auth-token": "eyJhbGciOiJIUzI1NiJ9.NjRiZTZlNDZhZjNjNzk1ODAzMzJiMDNk.mu3wD9HnJ6Y7oEScyvFykKn-wDV2vBj7XauRCvVTouU"
            },
            body:  JSON.stringify({
              "title": title,
              "description":description,
              "tag": tag,
              "author": "Mahesh More",
            })
          })
          const noteToBeSaved = await response.json();
          setNote(notes.concat(noteToBeSaved.note))
      }

      //delete the node
      const deleteNote = async(id) =>{
        const host = "http://localhost:4000"
        //auth token mocked for now
         await fetch(`${host}/api/notes/deletenote/${id}`, {
          method : 'DELETE',
          headers : {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiJ9.NjRiZTZlNDZhZjNjNzk1ODAzMzJiMDNk.mu3wD9HnJ6Y7oEScyvFykKn-wDV2vBj7XauRCvVTouU"
          }
        })
        const newNotes = notes.filter((note)=>{
          return note._id !== id;
        })
        setNote(newNotes);
      }

      //edit the note 
      const editNote = async(editedNote) =>{
        const host = "http://localhost:4000"
        //auth token mocked for now
         await fetch(`${host}/api/notes/updatenote/${editedNote._id}`, {
          method : 'PUT',
          headers : {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiJ9.NjRiZTZlNDZhZjNjNzk1ODAzMzJiMDNk.mu3wD9HnJ6Y7oEScyvFykKn-wDV2vBj7XauRCvVTouU"
          },
          body:  JSON.stringify({
            "title": editedNote.title,
            "description": editedNote.description,
            "tag": editedNote.tag,
            "author": editedNote.author,
          })
        })
        fetchNote()

      }

    return(
        <NoteContext.Provider value={{notes, addNote, deleteNote, fetchNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;