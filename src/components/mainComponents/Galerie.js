import React from 'react';
import {ImageList, ImageListItem} from "@mui/material";


const itemData = [
    {
        src: 'https://drive.google.com/uc?export=view&id=1B8LoHWlHcC-uJtK1_sK7mXiPsRwLv3mv'
    },
    {
        src: 'https://drive.google.com/uc?export=view&id=18Tu5f3y0iLOkPGw9BIDtS0_UKel3Velr'
    },
    {
        src: 'https://drive.google.com/uc?export=view&id=1TOjrvTvdCI45DtOFubZbz966AeUc5TLV'
    },
    {
        src: 'https://drive.google.com/uc?export=view&id=1Ree7xmMzIzNHBuilfBQhgDPpqVwSISJk'
    },
    {
        src: 'https://drive.google.com/uc?export=view&id=1tMPO5hBxDS_OuIkpeNC4cvySsZ12_5eZ'
    },
    {
        src: 'https://drive.google.com/uc?export=view&id=1ZP_jXZeSFH9Hw0IU5kyKOiKZJtx8PCgl'
    },
    {
        src: 'https://drive.google.com/uc?export=view&id=1eAkR52RizYpmSLT38A3zBJgjfVXG3rz6'
    },
    {
        src: 'https://drive.google.com/uc?export=view&id=1XIX0lv8Hbd86HsUiidN77bTsPF_fo-yM'
    },
    {
        src: 'https://drive.google.com/uc?export=view&id=1WCjUgQR8X6oOsktLEH_y3RnGNNd_5KZ8'
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