import React, { useState } from "react";

const Login = () => {
  const [creds, setCreds] = useState({ email: "", password: "", name: "" });
  const handleInput = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(creds);
    submitDetails();
  };

  const submitDetails = async() => {
    const response = await fetch("http://localhost:4000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(creds),
    });
    const details = await response.json();
    console.log("details : ", details);
  };

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "#E3DDDB", height: "100vh" }}
    >
      <div
        className="col-md-6"
        style={{ backgroundColor: "white", borderRadius: "10px" }}
      >
        <form
          style={{ height: "60vh" }}
          className="d-flex flex-column justify-content-center align-items-center"
          onSubmit={handleSubmit}
        >
          <h3>CloudyNotes</h3>

          <div className="form-group col-md-10 mb-4">
            <b>
              <label htmlFor="email" className="mb-1">
                Email address
              </label>
            </b>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={handleInput}
            />
          </div>
          <div className="form-group col-md-10 mb-5">
            <b>
              <label htmlFor="password" className="mb-1">
                Password
              </label>
            </b>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Password"
              onChange={handleInput}
            />
          </div>
          <div className="form-group col-md-10 mb-5">
            <b>
              <label htmlFor="name" className="mb-1">
                Name
              </label>
            </b>
            <input
              type="name"
              className="form-control"
              id="name"
              name="name"
              placeholder="name"
              onChange={handleInput}
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
