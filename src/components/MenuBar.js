import React from 'react';
import {AppBar, Box, Button, Container, Grid, IconButton, Toolbar, Typography} from "@mui/material";
import MenuPart from "./menuComponents/MenuPart";

const appBarStyle = {
    color: 'black',
    backgroundColor: "white",
    flexGrow: 1,
    margin: 0
}

const toolBarStyle = {
    display: 'flex',
    justifyContent: 'space-between'
}

function MenuBar(props) {
    return (
        <AppBar position="sticky" sx={appBarStyle}>
            <Toolbar color={"inherit"} sx={toolBarStyle}>
                <Typography variant="h3" component="div" sx={{fontSize: {xs: "5vh"}}} style={{fontFamily:'Alex Brush, Tangerine, serif'}}>
                    Thao & Martin
                </Typography>
                <MenuPart refsList={props.refsList}/>
            </Toolbar>
        </AppBar>
    );
}

export default MenuBar;