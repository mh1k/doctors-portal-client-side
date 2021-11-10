import { Alert, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const AvailableAppointment = ({ date }) => {
    const bookings = [
        {
            id: 1,
            name: 'Teeth Orthodonics',
            time: '08.00 AM - 09.00 AM',
            space: 10,
        },
        {
            id: 2,
            name: 'Cosmetic Dentistry',
            time: '09.00 AM - 10.00 AM',
            space: 8,
        },
        {
            id: 3,
            name: 'Teeth Cleaning',
            time: '10.00 AM - 11.00 AM',
            space: 9,
        },
        {
            id: 4,
            name: 'Cavity Protection',
            time: '11.00 AM - 12.00 PM',
            space: 5,
        },
        {
            id: 5,
            name: 'Pediatric Dental',
            time: '06.00 PM - 07.00 PM',
            space: 10,
        },
        {
            id: 6,
            name: 'Oral Surgery',
            time: '07.00 PM - 08.00 PM',
            space: 10,
        },
    ]

    const [appointmentSuccess, setAppointmentSuccess] = useState(false)

    return (
        <Container>
            <Typography variant="h4" sx={{ fontWeight: '600', color: "#11d0da", textAlign: 'center' }}>
                Available Appointments on {date.toDateString()}
            </Typography>
            <Box sx={{ height: '30px', textAlign: 'center' }}>
                {
                    appointmentSuccess && <Alert sx={{ width: "18%", backgroundColor: 'white', mx: 'auto' }} severity="success">Successfully Appointment</Alert>
                }
            </Box>
            <Grid sx={{ textAlign: 'center' }} container spacing={0}>
                {
                    bookings.map(book => <Booking date={date} key={book.id} setAppointmentSuccess={setAppointmentSuccess} book={book}></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;