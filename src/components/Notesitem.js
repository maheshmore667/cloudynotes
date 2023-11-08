import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const Notesitem = (props) => {
  const { notes } = props
  const {deleteNote} = useContext(noteContext);
  return (
    <>
      <div className="card col-md-3 mx-1 my-2">
        <div className="card-body ">
          <div className="d-flex align-items-center">
            <h5 className="card-title mx-2">{notes.title}</h5> 
            <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteNote(notes._id)}}></i>
            <i className="fa-regular fa-pen-to-square mx-2"></i>
          </div>
         
          <p className="card-text">
            {notes.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default Notesitem;
