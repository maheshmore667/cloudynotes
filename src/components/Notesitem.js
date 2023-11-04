import React from "react";

const Notesitem = (props) => {
  const { notes } = props;
  return (
    <>
      <div className="card col-md-3 mx-1 my-2">
        <div className="card-body ">
          <h5 className="card-title">{notes.title}</h5>
          <p className="card-text">
            {notes.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default Notesitem;
