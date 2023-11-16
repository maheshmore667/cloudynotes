import React, {useEffect} from "react";
import Notes from "./Notes";
import { useHistory } from "react-router-dom/cjs/react-router-dom";



const Home = () => {
  const history = useHistory();
 useEffect(()=>{
  if(!localStorage.getItem("authToken")) {
   history.push("/Login?functionality=Login") ;
  }
 })
  return (
    <>
    {localStorage.getItem("authToken") &&<div className="container">
      <Notes/>
    </div>}
    </>
  );
};

export default Home;
