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
            <Box sx={{fontFamily: 'Montserrat, roboto', margin:5}}>
                <h2>Informace pro hosty z okolí Cínovce, hotelu Lípa a hotelu Green House:</h2>
                <div style={{fontSize:20, margin: 5, paddingRight:10, paddingLeft: 10}}>
                    Nabízíme možnost dovozu na obřad v případě, že nebudete chtít řídit – svědek Marek a bratránek Radek Vám rádi budou k dispozici.
                    Prosím kontaktujte nás pokud budete mít zájem o svoz před obřadem. <br/><br/>
                    Na večer bude zajištěný odvoz v pravidelných časech nebo dle domluvy s řidičem.
                </div>
            </Box>

            <br/>
            <Box sx={{fontFamily: 'Montserrat, roboto', margin: 5}}>
                <h2>Informace pro přespávající:</h2>
                <div style={{fontSize:20, margin: 5, paddingRight:10, paddingLeft: 10}}>
                    Ubytování je zarezervováno přímo v Krušnohorském Dvoře a dále pak v 12 min pěšky vzdáleném hotel Lípa. Check-in kolem 13:00.

                    <br/><br/>
                    <b>Hotel Krušnohorský Dvůr</b> – cena za noc 990 Kč/os. se snídaní + 690 Kč přistýlka, platba možná v hotovosti i kartou. <br/><br/>
                    <b>Hotel Lípa</b> – cena za noc 690 Kč/os. bez snídaně, se snídaní příplatek 150 Kč/os., platba je možná <b>pouze v hotovosti.</b> <br/><br/>
                    <b>Hotel Green House</b> – cena za noc 1090 Kč/pokoj, se snídaní příplatek 130 Kč., platba možná v hotovosti i kartou.<br/><br/>

                    <div>
                    <i>
                        Rozpis pokojů pro všechny hosty naleznete&nbsp;
                    <a href={"https://docs.google.com/spreadsheets/d/1JxemX8bjIa2dv_83-dHLk4keG_YjOzIZbypi99t2-sQ/edit?usp=sharing"}>zde</a>.
                    </i>
                    </div>
                </div>
            </Box>

            <br/>
            <Box sx={{fontFamily: 'Montserrat, roboto'}}>
                <h2>Svatební dary:</h2>
                <div style={{fontSize:20, margin: 5, paddingRight:10, paddingLeft: 10}}>
                    <div style={{fontStyle: "italic"}}>Chce-li být snad někdo štědrý,</div>
                    <div style={{fontStyle: "italic"}}>radu pro něj máme,</div>
                    <div style={{fontStyle: "italic"}}>že cestujeme rádi světem,</div>
                    <div style={{fontStyle: "italic"}}>to je o nás známé.</div>
                    <br/>

                    <div style={{fontStyle: "italic"}}>Nenoste nám tedy prosím</div>
                    <div style={{fontStyle: "italic"}}>hrnce ani cukřenky,</div>
                    <div style={{fontStyle: "italic"}}>raději nám přispějte</div>
                    <div style={{fontStyle: "italic"}}>na pobyt či letenky. 😊</div>
                    <br/>

                    Těšíme se na Vás!!
                </div>
            </Box>

            <br/>
            <Box sx={{fontFamily: 'Montserrat, roboto'}}>
                <h2>Kdy:</h2>
                <p style={{fontSize:20}}>29. Července 2023</p>
            </Box>

            <Box sx={mapStyle}>
                <h2>Kde:</h2>
                <p style={{fontSize:20}}> Krušnohorský Dvůr na Cínovci</p>
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