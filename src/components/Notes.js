import React , { useContext } from 'react'
import noteContext from "../context/notes/noteContext";
import Notesitem from './Notesitem';
import AddNotes from './AddNotes';

const Notes = () => {
 const { notes } = useContext(noteContext);
  return (
    <div className="container my-3">
      <AddNotes/>
      <div className="row">
          { notes?.map((note) => {
             return <Notesitem key={note._id}  notes={note}/>
          })}
        </div>
    </div>
  )
}

export default Notes