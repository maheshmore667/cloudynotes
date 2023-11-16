import { useContext, useState } from "react";
import NoteContext from "./noteContext"
import alertContext from "../alert/alertContext";

const NoteState =(props) => {
    const initialNotes = []
    const [notes, setNote] = useState(initialNotes)
    const {setAlertConfig} = useContext(alertContext)
    

      //fetch all notes
      const fetchNote = async() =>{
        const host = "http://localhost:4000"
        //auth token mocked for now
        const responseAll = await fetch(`${host}/api/notes/fetchallnotes`, {
          method : 'GET',
          headers : {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("authToken")
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
              "auth-token": localStorage.getItem("authToken")
            },
            body:  JSON.stringify({
              "title": title,
              "description":description,
              "tag": tag,
              "author": "Mahesh More",
            })
          })
          const noteToBeSaved = await response.json();
          setAlertConfig({
            message: "Note is added successfully!!",
            state: "success",
            show: true
          },
          setTimeout(() => {
            setAlertConfig( {
              message: null,
              state: null,
              show: false
            }); 
          }, 1500)
          )
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
            "auth-token": localStorage.getItem("authToken")
          }
        })
        const newNotes = notes.filter((note)=>{
          return note._id !== id;
        })
        setNote(newNotes);
        setAlertConfig({
          message: "Note is deleted successfully!!",
          state: "success",
          show: true
        },
        setTimeout(() => {
          setAlertConfig( {
            message: null,
            state: null,
            show: false
          }); 
        }, 1500)
        )
      }

      //edit the note 
      const editNote = async(editedNote) =>{
        const host = "http://localhost:4000"
        //auth token mocked for now
         await fetch(`${host}/api/notes/updatenote/${editedNote._id}`, {
          method : 'PUT',
          headers : {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("authToken")
          },
          body:  JSON.stringify({
            "title": editedNote.title,
            "description": editedNote.description,
            "tag": editedNote.tag,
            "author": editedNote.author,
          })
        })
        fetchNote()
        setAlertConfig({
          message: "Note is saved successfully!!",
          state: "success",
          show: true
        },
        setTimeout(() => {
          setAlertConfig( {
            message: null,
            state: null,
            show: false
          }); 
        }, 1500)
        )

      }

    return(
        <NoteContext.Provider value={{notes, addNote, deleteNote, fetchNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;