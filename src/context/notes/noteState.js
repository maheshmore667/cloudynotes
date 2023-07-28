import NoteContext from "./noteContext"

const NoteState =(props) => {
    const state ={
        "name" : "Mahesh",
        "company" : "Cognizant"
    }
    return(
        <NoteContext.Provider value={state}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;