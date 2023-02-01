import React from 'react';
import Headline from "./mainComponents/Headline";
import HeadImg from "./mainComponents/HeadImg";
import About from "./mainComponents/About";
import Program from "./mainComponents/Program";
import Info from "./mainComponents/Info";
import Galerie from "./mainComponents/Galerie";

function Main(props) {
    return (
        <div style={{margin: 0}}>
            <HeadImg/>
            <Headline reference={props.refsList[0]}/>
            <About/>
            <Program reference={props.refsList[1]}/>
            <Info reference={props.refsList[2]}/>
            <Galerie reference={props.refsList[3]}/>
        </div>
    );
}

export default Main;