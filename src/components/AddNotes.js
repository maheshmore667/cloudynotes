import React from 'react'

const AddNotes = () => {
  return (
    <div className="my-3">
        <h2>Add a Note</h2>
        <form className="my-3">
          <div className="form-group my-3">
            <label htmlFor="title">Note Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="Note Title"
              placeholder="Enter title of the note"
            ></input>
          </div>
          <div className="form-group my-3">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              aria-describedby="Note Description"
              placeholder="description"
            ></input>
          </div>
          <button className="btn btn-primary">
            Add Note
          </button>
        </form>
        
      </div>
  )
}

export default AddNotes
