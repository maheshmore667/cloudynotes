import noteContext from '../context/notes/noteContext';
import React,{ useContext } from 'react';

const About =() =>{
    const a = useContext(noteContext);
return(
    <>
     this is About {a.name}!!
    </>
)
}
export default About;