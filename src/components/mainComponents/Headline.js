import React from 'react';
import {
    Alert,
    Box,
    Button, Checkbox,
    Dialog, DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Snackbar,
    TextField,
    ThemeProvider
} from "@mui/material";
import { createTheme } from '@mui/material/styles';

const titleStyle = {
    margin: "3vw",
    fontSize: {xs: '8vh', md: '7vw'},
    fontFamily: 'Alex Brush, Tangerine, serif',
}

const dateStyle = {
    fontSize: {xs:'3vh' ,md: "4vh"},
    padding: "1vw",
    fontFamily: "Montserrat, roboto"
}

const previewStyle = {
    fontSize: {xs: "15px", md: "30px"},
    padding: "1vw",
    lineHeight: "4vw",
    fontFamily: "Montserrat, roboto"
}

const lineStyleTop = {
    border: "1px solid black",
    width: "10%",
    marginTop: "5vw",
    marginBottom: "3vw"
}

const lineStyleBot = {
    border: "1px solid black",
    width: "10%",
    marginTop: "3vw",
    marginBottom: "5vw"
}

const rsvpStyle = {
    marginTop: "3vw",
    marginBottom: "1vw"
}


const theme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    palette: {
        primary: {
            main: '#0971f1',
            darker: '#053e85',
        },
        black: {
            main: '#000',
            contrastText: '#fff',
        },
    },
});

function Headline(props) {
    const [open, setOpen] = React.useState(false);
    const [openSnackBar, setOpenSnackBar] = React.useState(false);
    const [successAlert, setSuccessAlert] = React.useState(false);

    const [nameValue, setNameValue] = React.useState("");
    const [attend, setAttend] = React.useState("");
    const [plusOne, setPlusOne] = React.useState(false);
    const [sleep, setSleep] = React.useState(false);

    const chooseAlert = () => {
        if (successAlert){
            return(
                <Alert onClose={handleCloseSnackBar} severity="success" sx={{ width: '100%' }}>
                    Vaše potvrzení pozvánky bylo odesláno.
                </Alert>)
        }else {
            return (
                <Alert onClose={handleCloseSnackBar} severity="error" sx={{ width: '100%' }}>
                    Vaše potvrzení pozvánky není vyplněno.
                </Alert>
            )
        }
    }

    const handleClickOpen = () => {
        setNameValue("");
        setAttend("");
        setPlusOne(false);
        setSleep(false);
        setSuccessAlert(false);

        setOpen(true);
    };

    const handleCloseSnackBar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnackBar(false);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSend = () => {
        setOpenSnackBar(true)
        let name = nameValue;
        let willAttend = attend;
        let havePlusOne = plusOne ? "ANO" : "NE";
        let willSleep = sleep? "ANO": "NE";

        if (nameValue !== "" && willAttend !== ""){
            let data = {
                Name: name,
                Attend: willAttend,
                PlusOne: havePlusOne,
                Sleep: willSleep
            }

            const formData = new FormData();
            for (let key in data){
                formData.append(key, data[key])
            }
            fetch("https://script.google.com/macros/s/AKfycbxuB99C4URURaSKkhd8mcg0SQJ-twiBBwKxOp9btVB_TB0G4NqvD52u-hsxOI3E7YP_/exec",
                {
                    method: "POST",
                    body: formData
                }).then(() => {
                console.log("data submitted")
            })

            setSuccessAlert(true)
            handleClose();
        } else{
            setOpenSnackBar(true)
        }
    }

    return (
        <div ref={props.reference}>
            <Box sx={titleStyle}> Thao & Martin</Box>

            <Box sx={dateStyle}>
                29. Července 2023
            </Box>

            <ThemeProvider theme={theme}>
                <Button variant={"contained"} sx={rsvpStyle} size={"large"} color={"black"} onClick={handleClickOpen}>
                    RSVP
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>RSVP</DialogTitle>
                    <DialogContent>
                        <FormControl >
                            <DialogContentText>
                                Zde můžete potvrdit svojí účast na svatbě.
                            </DialogContentText>

                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Jméno a příjmení"
                                type="text"
                                fullWidth
                                variant="standard"

                                value={nameValue}
                                onChange={e => {
                                    setNameValue(e.target.value)
                                }}
                            />

                            <FormLabel>Budu se účastnit</FormLabel>
                            <RadioGroup
                                row
                                value={attend}
                                onChange={(e) => {
                                    setAttend(e.target.value)
                                }}
                            >
                                <FormControlLabel value="Ano" control={<Radio />} label="Ano" />
                                <FormControlLabel value="Ne" control={<Radio />} label="Ne" />
                            </RadioGroup>

                            <FormControlLabel
                                value={plusOne} onChange={(e, checked) => {
                                setPlusOne(checked)
                            }}
                                control={<Checkbox />} label="Budu mít doprovod"
                            />
                            <FormControlLabel
                                value={sleep}
                                onChange={(e, checked) => {
                                    setSleep(checked)
                                }}
                                control={<Checkbox />}
                                label="Budu přespávat"
                            />
                        </FormControl>

                    </DialogContent>

                    <DialogActions>
                        <Button onClick={handleSend} onSubmit={()=> {console.log("submit")}}>Odeslat</Button>
                        <Button onClick={handleClose} color={"error"}>Zrušit</Button>
                    </DialogActions>
                </Dialog>
            </ThemeProvider>

            <Snackbar open={openSnackBar} autoHideDuration={1500} onClose={handleCloseSnackBar}>
                {
                    chooseAlert()
                }
            </Snackbar>

            <hr style={lineStyleTop}/>
            <Box sx={previewStyle}>
                VÍTEJTE NA NAŠICH SVATEBNÍCH STRÁNKÁCH! <br/>
                <div style={{    fontFamily: 'Alex Brush, Tangerine, serif'}}>Potkali jsme se… Poznali jsme se… Milujeme se... a tak se bereme 😊</div>
            </Box>
            <hr style={lineStyleBot}/>
        </div>
    );
}

export default Headline;