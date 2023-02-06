import React from 'react';
import {Box} from "@mui/material";

const mapStyle = {
    width: {md: "40vw", xs: "80vw"},
    height: {md: "40vh", xs: "50vh"},
    padding: "5px",
    margin: "5px",
    fontFamily: 'Montserrat, roboto'
}

function Info(props) {
    return (
        <div ref={props.reference} style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection:"column"}}>
            <h1 style={{marginBottom: 0,fontFamily: 'Alex Brush, Tangerine, serif', fontWeight: 'normal', fontSize: 70}}>Informace</h1>
            <Box sx={{fontFamily: 'Montserrat, roboto'}}>
                <h2>Kdy:</h2>
                <p style={{fontSize:25}}>29. Července 2023</p>
            </Box>
            <Box sx={mapStyle}>
                <h2>Kde:</h2>
                <p style={{fontSize:25}}> Krušnohorský Dvůr na Cínovci</p>
                <iframe
                    src={"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10102.200462044757!2d13.7533481!3d50.728285!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa4f9e6536367802b!2sHotel%20a%20restaurace%20Kru%C5%A1nohorsk%C3%BD%20Dv%C5%AFr!5e0!3m2!1scs!2scz!4v1671970852647!5m2!1scs!2scz"}
                    style={{border: 0}}
                    width={"100%"}
                    height={"100%"}
                    allowFullScreen={false}
                    loading={"lazy"}
                    referrerPolicy={"no-referrer-when-downgrade"}
                />
            </Box>
        </div>
    );
}

export default Info;