import React from 'react';
import {Box} from "@mui/material";

const infoStyle = {
    fontSize: {xs: "15px", md: "20px"},
    maxWidth: "35vh",
    margin: "5px"
}


const info1 = (
    <Box sx={infoStyle}>
        <h3 style={{fontFamily: 'Alex Brush,Tangerine, serif',fontWeight: 'normal', fontSize: 50}}>Jak jsme se poznali</h3>

        <div style={{fontFamily: "Montserrat, roboto", fontSize: 20}}>
            Našli jsme se 10.9.2016 a od té doby jsme šťastni.
            Ona ze Žatce, On z Krupky.
            Ona studovala v Hradci Králové Farmacii.
            On studoval v Praze Policejní akademii.
            Díky společnému kamarádovi Fildovi jsme se seznámili na akci zvané „Gauč paní Jandové“
            a o 6 let později jsme se rozhodli říci si své ANO!
        </div>
    </Box>
)

const info2 = (
    <Box sx={infoStyle}>
        <h3 style={{fontFamily: 'Alex Brush, Tangerine, serif',fontWeight: 'normal', fontSize: 50}}>Zásnuby</h3>
        <div style={{fontFamily: "Montserrat, roboto", fontSize: 20}}>
            Martin naplánoval romantický výlet do francouzského Lyonu.
            Říkáte si proč právě Lyon? Na to je jednoduchá odpověď - byly tam levné letenky z Prahy :D .
            Všechno mělo být velké překvapení, Martin byl velmi tajemný ohledně celé cesty, tudíž jsem pojala lehké podezření, že se něco chystá.
            17. června jsme se hodili do gala, zašli jsme si na výbornou večeři do tradiční lyonské restaurace bouchon [čti: bušón] a pak se vydali na večerní procházku do centra města.
            Martin se vyslovil na lyonském náměstí s otázkou „Zlato vezmeš si mě?“ a já radostně odpověděla „ANO“.
        </div>
    </Box>
)

function About(props) {
    return (
        <div>
            <Box sx={{display: {xs: 'flex', md: 'none'}, flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                {info1}
                {info2}
            </Box>

            <Box sx={{display: { xs: 'none', md: 'flex'}, justifyContent: "space-around"}}>
                {info1}
                {info2}
            </Box>
        </div>
    );
}

export default About;