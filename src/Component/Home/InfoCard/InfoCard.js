import { Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const InfoCard = () => {

    const infodata = [
        {
            name: "Opening hours",
            description: "we are open 7 days",
            img: "https://cdn.icon-icons.com/icons2/933/PNG/512/clock-with-white-face_icon-icons.com_72804.png",
            color : '#11d0da'
        },
        {
            name: "Visit our location",
            description: "Bofdifh, NY1000, United States",
            img: "https://cdn.icon-icons.com/icons2/911/PNG/512/map-location-pin_icon-icons.com_71430.png",
            color : 'gray'
        },
        {
            name: "Contact us now",
            description: "+111 111 223366",
            img: "https://cdn.icon-icons.com/icons2/1674/PNG/512/phonecall_110970.png",
            color : '#11d0da'
        }
    ]
    return (
        <div >
            <Container sx={{mb:6}}>
                <Grid  container spacing={2}>
                    {
                        infodata.map(info => <Grid item xs={12} md={4}>
                            <Paper style={{backgroundColor:`${info.color}`, color: 'white'}} sx={{borderRadius: 0, display:'flex',justifyContent: 'space-between', p:3}}>
                            <img src={info.img} style={{width:'50px',filter: " brightness(0) invert(1)"}} alt="" />
                            <Box>
                                <Typography variant="subtitle2">
                                    {info.name}
                                </Typography>
                                <Typography variant="body2">
                                    {info.description}
                                </Typography>
                            </Box>
                            </Paper>
                        </Grid>)
                    }
                </Grid>

            </Container>

        </div>
    );
};

export default InfoCard;