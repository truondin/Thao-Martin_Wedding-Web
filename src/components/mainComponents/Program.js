import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import {Box, Divider, Typography} from "@mui/material";
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';

const titleStyle = {
    fontFamily: 'Montserrat, roboto'
}


const infoTitleStyle = {
    fontFamily: 'Montserrat, roboto',
    fontSize: 18
}

const timeline = () => {
    return (
        <>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="h5" component="span" sx={titleStyle}>13:00 - 14:00</Typography>
                    <Typography sx={infoTitleStyle}>
                        Příjezd hostů
                    </Typography>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="h5" component="span" sx={titleStyle}>14:30</Typography>
                    <Typography sx={infoTitleStyle}>
                        Svatební obřad
                    </Typography>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="h5" component="span" sx={titleStyle}>15:00</Typography>
                    <Typography sx={infoTitleStyle}>
                        Focení po svatebním obřadu
                    </Typography>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="h5" component="span" sx={titleStyle}>16:00</Typography>
                    <Typography sx={infoTitleStyle}>
                        Svatební oběd
                    </Typography>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="h5" component="span" sx={titleStyle}>17:30</Typography>
                    <Typography sx={infoTitleStyle}>
                        Krájení svatebního dortu
                    </Typography>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="h5" component="span" sx={titleStyle}>18:00</Typography>
                    <Typography sx={infoTitleStyle}>
                        První tanec novomanželů + zahájení taneční zábavy
                    </Typography>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="h5" component="span" sx={titleStyle}>19:00</Typography>
                    <Typography sx={infoTitleStyle}>
                        Rok s novomanželi + zahájení grilování
                    </Typography>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="h5" component="span" sx={titleStyle}>20:00</Typography>
                    <Typography sx={infoTitleStyle}>
                        Házení kytice
                    </Typography>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="h5" component="span" sx={titleStyle}>21:00</Typography>
                    <Typography sx={infoTitleStyle}>
                        Tanec s prskavkami
                    </Typography>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="h5" component="span" sx={titleStyle}>22:00</Typography>
                    <Typography sx={infoTitleStyle}>
                        Svatební kočár
                    </Typography>
                </TimelineContent>
            </TimelineItem>
        </>
    )
}

function Program(props) {
    return (
        <div ref={props.reference} >
            <br/>
            <Box sx={{fontFamily: 'Montserrat, roboto'}}>
                <br/>
                <p style={{fontSize:25, margin: 5, paddingLeft:10, paddingRight: 10, fontStyle:"italic"}}>
                    <b>Abychom Vás nalákali, můžete nakouknout do připravovaného Svatebního Menu...</b>
                </p>
                <p style={{fontSize: 20}}><i><b>Přípitek</b></i> : Prosecco</p>
                <p style={{fontSize: 20, paddingLeft:10, paddingRight: 10,}}><i><b>Polévka</b></i> : Hovězí vývar s nudlemi, játrovými knedlíčky a kořenovou zeleninou</p>
                <p style={{fontSize: 20}}><i><b>Hlavní chod</b></i> : Bun bo nam bo</p>
                <p style={{fontSize: 20}}><b>... a ještě více 😊</b></p>
            </Box>

            <h1 style={{fontFamily: 'Alex Brush, Tangerine, serif', fontWeight: 'normal', fontSize: 70}}>Program</h1>
            <Box sx={{ display: { xs: 'none', md: 'flex'}}}>
                <Timeline position="alternate">
                    {timeline()}
                </Timeline>
            </Box>

            <Box sx={{ display: { xs: 'flex', md: 'none'}}}>
                <Timeline
                    sx={{
                        [`& .${timelineItemClasses.root}:before`]: {
                            flex: 0,
                            padding: 0,
                        },
                    }}
                >
                    {timeline()}
                </Timeline>
            </Box>
            <Box sx={{fontFamily: 'Montserrat, roboto'}}>
                <h2>Doprovodný program:</h2>
                <p style={{fontSize:20}}>17:00 – Otevření pánského a dámského koutku, fotokoutek</p>
                <br/>
                <p style={{fontSize:20, margin: 5, fontStyle: "italic"}}>Veškeré časy jsou pouze orientační 😊</p>
            </Box>
        </div>
    );
}

export default Program;