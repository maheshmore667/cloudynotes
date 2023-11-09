import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";
import Notesitem from "./Notesitem";
import AddNotes from "./AddNotes";

const Notes = () => {
  const { notes, fetchNote } = useContext(noteContext);
  useEffect(() => {
    fetchNote(); // eslint-disable-next-line
  }, []);
  
  return (
    <div className="container my-3">
      <AddNotes />
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Your Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="form-group my-3">
                  <label className="mb-2" htmlFor="title">
                    Note Title
                  </label>
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
                  <label className="mb-2" htmlFor="description">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    name="description"
                    aria-describedby="Note Description"
                    placeholder="description"
                  ></input>
                </div>
                <div className="form-group my-3">
                  <label className="mb-2" htmlFor="tag">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="tag"
                    name="tag"
                    aria-describedby="Note Tag"
                    placeholder="tag"
                  ></input>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        {notes?.map((note) => {
          return <Notesitem key={note._id} notes={note} />;
        })}
      </div>
    </div>
  );
};

export default Notes;
