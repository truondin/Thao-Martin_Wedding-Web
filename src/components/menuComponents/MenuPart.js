import React, {useState} from 'react';
import {Box, Button, Fade, Grid, IconButton, Menu, MenuItem, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const pages = ["SVATEBNÍ PARTY", "PROGRAM", "INFORMACE", "GALERIE"];


function MenuPart(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const clickToScroll = (ref) => {
        console.log(ref);
        ref.current.scrollIntoView({behavior: 'smooth', block: "start", inline: "start"});
    }

    return (<div style={{backgroundColor: 'white'}}>
        <Box color={"inherit"} sx={{ flexGrow: 0, display: { xs: 'block', md: 'none'}}}>
             <Button
                 size="large"
                 edge="start"
                 color="inherit"
                 aria-label="menu"

                 id="fade-button"
                 aria-controls={open ? 'fade-menu' : undefined}
                 aria-haspopup="true"
                 aria-expanded={open ? 'true' : undefined}
                 onClick={handleClick}
             >
                 <MenuIcon/>
             </Button>
                 <Menu
                       id="fade-menu"
                       MenuListProps={{
                           'aria-labelledby': 'fade-button',
                       }}
                       anchorEl={anchorEl}
                       open={open}
                       onClose={handleClose}
                       TransitionComponent={Fade}
                 >
                    {pages.map((page, index)=>(
                        <MenuItem key={page}
                                  onClick={() => {
                                      clickToScroll(props.refsList[index])
                                  }}
                        >
                            <Typography style={{fontFamily: 'serif'}} textAlign="center">{page}</Typography>
                        </MenuItem>
                    ))}
                </Menu>
        </Box>

        <Box color={"inherit"} sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex'}}}>
            {pages.map((page, index) => (
                <Button
                    key={page}
                    onClick={() => {clickToScroll(props.refsList[index])}}
                    variant={"text"}

                    sx={{ my: 2, color: "inherit"}}
                >
                     {page}
                 </Button>
             ))}
        </Box>
    </div>
    );
}

export default MenuPart;
