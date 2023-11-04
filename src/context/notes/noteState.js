import { useState } from "react";
import NoteContext from "./noteContext"

const NoteState =(props) => {
    const initialNotes =[
        {
          "_id": "64bff480a473e7e4ce06531a",
          "user": "64be6e46af3c79580332b03d",
          "title": "React Learning",
          "description": "For switch the react hands on is important",
          "tag": "Im",
          "author": "Mahesh More",
          "date": "2023-07-25T16:12:48.921Z",
          "__v": 0
        },
        {
          "_id": "64bff482a473e7e4ce06531c",
          "user": "64be6e46af3c79580332b03d",
          "title": "React Learning",
          "description": "For switch the react hands on is important",
          "tag": "Im",
          "author": "Mahesh More",
          "date": "2023-07-25T16:12:50.706Z",
          "__v": 0
        }
        ,
        {
          "_id": "64bff482a473e7e4ce06531c",
          "user": "64be6e46af3c79580332b03d",
          "title": "React Learning",
          "description": "For switch the react hands on is important",
          "tag": "Im",
          "author": "Mahesh More",
          "date": "2023-07-25T16:12:50.706Z",
          "__v": 0
        } ,
        {
          "_id": "64bff482a473e7e4ce06531c",
          "user": "64be6e46af3c79580332b03d",
          "title": "React Learning",
          "description": "For switch the react hands on is important",
          "tag": "Im",
          "author": "Mahesh More",
          "date": "2023-07-25T16:12:50.706Z",
          "__v": 0
        }
      ];
      const [notes, setNote] = useState(initialNotes);
    return(
        <NoteContext.Provider value={{notes, setNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;