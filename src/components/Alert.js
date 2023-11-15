import React, { useContext} from "react";
import alertContext from "../context/alert/alertContext";

const Alert = () => {
  const {alert} = useContext(alertContext);
  return (
    <>
      {alert?.show && (
        <div className="alert alert-primary" role="alert">
          {`${alert?.message}`}— CloudyNotes!
        </div>
      )}
    </>
  );
};

export default Alert;
