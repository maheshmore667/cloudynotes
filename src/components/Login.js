import React from "react";

const Login = () => {
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "#E3DDDB", height:"100vh"}}
    >
        
      <div className="col-md-6" style={{ backgroundColor: "white" }}>
      
        <form style={{height:"50vh"}} className="d-flex flex-column justify-content-center align-items-center">
        <h3 className="mb-2">CloudyNotes</h3>

          <div className="form-group col-md-10 mb-4">
            <label htmlFor="Email" >Email address</label>
            <input
              type="email"
              className="form-control"
              id="Email"
              name="Email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group col-md-10 mb-5">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
