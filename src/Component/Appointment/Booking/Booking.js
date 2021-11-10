import { Grid, Modal, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import MuiButton from '../../../StyledComponent/MuiButton';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ book, date, setAppointmentSuccess }) => {
    const { name, time, space } = book;

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true)
        setAppointmentSuccess(false)
    }
    const handleClose = () => setOpen(false);

    return (
        <>
            <Grid item xs={12} sm={6} md={4} sx={{ p: 3 }}>
                <Paper elevation={0} sx={{ p: 3, boxShadow: 3 }}>
                    <Typography variant="h6" sx={{ color: "#11d0da" }}>
                        {name}
                    </Typography>
                    <Typography variant="subtitle2">
                        {time}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "gray", py: 1 }}>
                        {space} SPACES AVAILABLE
                    </Typography>
                    <MuiButton onClick={handleOpen}>BOOK APPOINTMENT</MuiButton>
                </Paper>
            </Grid>
            <BookingModal setAppointmentSuccess={setAppointmentSuccess} date={date} booking={book} open={open} handleClose={handleClose}></BookingModal>
        </>
    );
};

export default Booking;