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
            src={"https://drive.google.com/uc?export=view&id=1b3r8oBTNZxS5eWXxT9UKpnvKPlMI-jtv"}
        />
    );
}

export default HeadImg;