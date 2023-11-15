import React, { useEffect, useState, useContext} from "react";
import {useHistory} from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import alertContext from "../context/alert/alertContext";

const Login = () => {
  const [creds, setCreds] = useState({ email: "", password: "", name: "" });
  const {setAlertConfig} = useContext(alertContext)
  const history = useHistory();
  const handleInput = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };
  var [pageName, setPageName] = useState("");
  const location = useLocation();
  var[url,setUrl] = useState("");

  useEffect(()=>{
    const queryParams = new URLSearchParams(location.search);
    setPageName(queryParams.get('functionality')); 
    pageName.toLowerCase() === "login" ? setUrl("http://localhost:4000/api/auth/login") : setUrl("http://localhost:4000/api/auth/createUser");
  },[location.search, pageName])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(creds);
    submitDetails();
  };

  const submitDetails = async () => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(creds),
      });
      const details = await response.json();
      if(details?.authToken) {
        localStorage.setItem('authToken', details?.authToken);
        setAlertConfig({
          message: `${pageName} is success!!`,
          state: "success",
          show: true
        },
        setTimeout(() => {
          setAlertConfig( {
            message: null,
            state: null,
            show: false
          }); 
        }, 1500)
        )
        history.push('/')
      } else {
        alert("Wrong Details")
      }
    } catch (err) {
      console.log(err);
    }
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
          <h3>CloudyNotes {pageName}</h3>

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
          { pageName?.toLowerCase() === "signup" && <div className="form-group col-md-10 mb-5">
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
          </div> }
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
