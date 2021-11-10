import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import MuiButton from '../../../StyledComponent/MuiButton';

const AppointmentSection = () => {
    const appointmentBanner = {
        background: `url("https://i.ibb.co/Ny23sdN/appointment-bg.png")`,
        backgroundSize:'cover',
        backgroundColor: 'rgba(45, 58, 74, 0.9)',
        backgroundBlendMode: 'darken, luminosity',
        marginTop: '170px'

    }
    return (
        <div style={{...appointmentBanner, marginBottom:'20px'}} sx={{ flexGrow: 1 }}>
            <Container>
                <Grid container spacing={2} sx={{alignItems: 'center'}}>
                    <Grid item xs={12} sm={12} md={5} lg={5}>
                        <img src="https://i.ibb.co/NZV23mj/doctor.png" width="100%" style={{marginTop: '-130px',display:'block'}} alt="" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={7} lg={7} sx={{
                        mb:3
                        // display: 'flex',
                        // justifyContent: 'flex-start',
                        // alignItems: 'center',
                        // textAlign: 'left'
                    }}>
                        <Box>
                            <Typography variant='h6' sx={{ fontWeight: '600', mb: 4, color: "#11d0da" }}>
                                Appointment
                            </Typography>
                            <Typography variant='h4' sx={{ fontWeight: '500', mb: 4 ,color : 'white'}}>
                                Make an appointment <br />
                                Today
                            </Typography>
                            <Typography variant='body1' sx={{ mb: 3 ,color : 'white'}}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem explicabo officia sit sunt ipsam odit dicta rerum esse nam cum?
                            </Typography>
                            <MuiButton>Learn More</MuiButton>
                        </Box>

                    </Grid>

                </Grid>
            </Container>
        </div>
    );
};

export default AppointmentSection;