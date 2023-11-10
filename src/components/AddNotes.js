import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext'

const AddNotes = () => {
    const [note, setNote] = useState({title: "", tag : "", description:""})
    const {addNote} = useContext(noteContext)

    const callAddNote = (e) =>{
        e.preventDefault();
        addNote(note.tag, note.description, note.title);
        setNote({title: "", tag : "", description:""})
    }
    const handleChange =(e) =>{
        setNote({...note, [e.target.name] : e.target.value})
    }

  return (
    <div className="my-3">
        <h2>Add a Note</h2>
        <form className="my-3">
          <div className="form-group my-3">
            <label className="mb-2" htmlFor="title">Note Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={note?.title}
              aria-describedby="Note Title"
              placeholder="Enter title of the note"
              onChange={handleChange}
            ></input>
          </div>
          <div className="form-group my-3">
            <label className="mb-2" htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              value={note?.description}
              aria-describedby="Note Description"
              placeholder="description"
              onChange={handleChange}
            ></input>
          </div>
          <div className="form-group my-3">
            <label className="mb-2" htmlFor="tag">Tag</label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              value={note?.tag}
              aria-describedby="Note Tag"
              placeholder="tag"
              onChange={handleChange}
            ></input>
          </div>
          <button disabled={!note?.title && !note?.description && !note?.tag} className="btn btn-primary" onClick={callAddNote}>
            Add Note
          </button>
        </form>
        
      </div>
  )
}

export default AddNotes
