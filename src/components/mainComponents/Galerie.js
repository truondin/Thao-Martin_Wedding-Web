import React from 'react';
import {ImageList, ImageListItem} from "@mui/material";


const itemData = [
    {
        src: '/resources/gallery1.jpg'
    },
    {
        src: '/resources/gallery3.jpg'
    },
    {
        src: '/resources/gallery2.jpg'
    },
    {
        src: '/resources/gallery4.jpg'
    },
    {
        src: '/resources/gallery5.jpg'
    },
    {
        src: '/resources/gallery6.jpg'
    },
    {
        src: '/resources/gallery7.jpg'
    },
    {
        src: '/resources/gallery9.jpg'
    },
    {
        src: '/resources/gallery8.jpg'
    }
];

function Galerie(props) {
    return (
        <div ref={props.reference} style={{marginTop: "150px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection:"column"}}>
            <h1 style={{marginBottom: 0,fontFamily: 'Tangerine, serif', fontWeight: 'normal', fontSize: 70}}>Galerie</h1>

            <ImageList sx={{ width: "85%"}} cols={3} rowHeight={"auto"} variant={"quilted"}>
                {itemData.map((item, index) => (
                    <ImageListItem key={item.src}>
                        <img
                            src={item.src}
                            srcSet={item.src}
                            alt={"photo #" + index}
                            loading="lazy"
                        />

                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    );
}

export default Galerie;