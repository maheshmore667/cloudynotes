import React from "react";
import Notes from "./Notes";


const Home = () => {
 
  return (
    <>
      <div className="container my-3">
        <h2>Add a Note</h2>
        <form className="my-3">
          <div className="form-group my-3">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            ></input>
          </div>
          <div className="form-group my-3">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            ></input>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <Notes/>
      </div>
    </>
  );
};

export default Home;
