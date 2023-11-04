import React , { useContext } from 'react'
import noteContext from "../context/notes/noteContext";
import Notesitem from './Notesitem';

const Notes = () => {
 const { notes } = useContext(noteContext);
  return (
    <div>
      <div className="row">
          { notes?.map((note) => {
             return <Notesitem key={note._id}  notes={note}/>
          })}
        </div>
    </div>
  )
}

export default Notes
