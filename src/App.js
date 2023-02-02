import './App.css';
import MenuBar from "./components/MenuBar";
import Main from "./components/Main";
import {useEffect, useRef} from "react";
import React, { Component }  from 'react';

function App() {
    useEffect(() => {
        document.title = "Thao & Martin";
    }, []);

    const partyRef = useRef(null)
    const programRef = useRef(null)
    const infoRef = useRef(null)
    const galleryRef = useRef(null)
    const refs = [partyRef, programRef, infoRef, galleryRef]

    return (
     <div className="App" style={{backgroundColor: "white", paddingBottom: "50px", margin: 0, fontFamily: 'serif'}}>
         <MenuBar refsList={refs}/>
         <Main refsList={refs}/>
     </div>
);
}

export default App;
