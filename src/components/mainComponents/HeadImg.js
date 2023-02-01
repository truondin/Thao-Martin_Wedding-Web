import React from 'react';
import {Box} from "@mui/material";

function HeadImg(props) {
    return (
        <Box
            component={"img"}
            sx={{
                width: "100%",
                height: "auto",
                padding: 0,
                margin: 0,
            }}
            src={"/resources/main.jpg"}
        />
    );
}

export default HeadImg;