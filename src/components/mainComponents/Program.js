import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import {Box, Typography} from "@mui/material";
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';

const titleStyle = {
    fontFamily: 'Montserrat, roboto'
}


const infoTitleStyle = {
    fontFamily: 'Montserrat, roboto',
    fontSize: 18
}

function Program(props) {
    return (
        <div ref={props.reference} >
            <h1 style={{fontFamily: 'Alex Brush, Tangerine, serif', fontWeight: 'normal', fontSize: 70}}>Program</h1>

            <Box sx={{ display: { xs: 'none', md: 'flex'}}}>
                <Timeline position="alternate">
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant="h5" component="span" sx={titleStyle}>Title 1</Typography>
                            <Typography sx={infoTitleStyle}>
                                Because you need strength asda  ad asd asda d a
                                Because you need strength asda  ad asd asda d aa dad afad ad ad
                                Because you need strength asda  ad asd asda d aa dad afad ad ad
                                Because you need strength asda  ad asd asda d aa dad afad ad ad
                                Because you need strength asda  ad asd asda d aa dad afad ad ad
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant="h5" component="span" sx={titleStyle}>Title 2</Typography>
                            <Typography sx={infoTitleStyle}>
                                Because you need strength asda  ad asd asda d a
                                Because you need strength asda  ad asd asda d aa dad afad ad ad
                                Because you need strength asda  ad asd asda d aa dad afad ad ad
                                Because you need strength asda  ad asd asda d aa dad afad ad ad
                                Because you need strength asda  ad asd asda d aa dad afad ad ad
                            </Typography></TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant="h5" component="span" sx={titleStyle}>Title 3</Typography>
                            <Typography sx={infoTitleStyle}>
                                Because you need strength asda  ad asd asda d a
                                Because you need strength asda  ad asd asda d aa dad afad ad ad
                                Because you need strength asda  ad asd asda d aa dad afad ad ad
                                Because you need strength asda  ad asd asda d aa dad afad ad ad
                                Because you need strength asda  ad asd asda d aa dad afad ad ad
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
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
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant="h5" component="span" sx={titleStyle}>Title 1</Typography>
                            <Typography sx={infoTitleStyle}>
                                Because you need strength asda  ad asd asda d a
                                Because you need strength asda  ad asd asda d aa dad afad ad ad
                                Because you need strength asda  ad asd asda d aa dad afad ad ad
                                Because you need strength asda  ad asd asda d aa dad afad ad ad
                                Because you need strength asda  ad asd asda d aa dad afad ad ad
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant="h5" component="span" sx={titleStyle}>Title 2</Typography>
                            <Typography sx={infoTitleStyle}>
                                Because you need strength asda  ad asd asda d a
                                Because you need strength asda  ad asd asda d aa dad afad ad ad
                                Because you need strength asda  ad asd asda d aa dad afad ad ad
                                Because you need strength asda  ad asd asda d aa dad afad ad ad
                                Because you need strength asda  ad asd asda d aa dad afad ad ad
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant="h5" component="span" sx={titleStyle}>Title 2</Typography>
                            <Typography sx={infoTitleStyle}>
                                Because you need strength asda  ad asd asda d a
                                Because you need strength asda  ad asd asda d aa dad afad ad ad
                                Because you need strength asda  ad asd asda d aa dad afad ad ad
                                Because you need strength asda  ad asd asda d aa dad afad ad ad
                                Because you need strength asda  ad asd asda d aa dad afad ad ad
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>

                </Timeline>
            </Box>
        </div>
    );
}

export default Program;