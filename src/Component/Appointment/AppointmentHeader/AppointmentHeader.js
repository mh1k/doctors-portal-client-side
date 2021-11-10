import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Calander from '../../Shared/Calender/Calander';

const AppointmentHeader = ({date,setDate}) => {
    return (
        <Container sx={{ mt: 5,mb:5 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" style={{ color: "#11d0da" }} sx={{ fontWeight: 600 }}>
                        Appointment
                    </Typography>
                    <Calander date={date} setDate={setDate}></Calander>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src="https://i.ibb.co/gw850PM/chair.png" style={{ width: "100%" }} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppointmentHeader;