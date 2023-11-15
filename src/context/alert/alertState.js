import { useState } from "react";
import AlertContext from "./alertContext";

const AlertState = (props) => {
  const initialAlertState = {
    message: null,
    state: null,
    show: false,
  };
  const [alert, setAlertState] = useState(initialAlertState);

  const setAlertConfig = (config)=>{
    setAlertState(config)
  }

  return (
    <AlertContext.Provider value={{alert, setAlertConfig}}>
        {props.children}
    </AlertContext.Provider>
  );
}

export default AlertState;
