import { Modal, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import MuiButton from '../../../StyledComponent/MuiButton';

const BookingModal = ({ open, handleClose, booking, date, setAppointmentSuccess }) => {
    const { name, time } = booking
    const { user } = useAuth();

    const initInfo = {
        patientName: user.displayName,
        email: user.email,
        phoneNumber: ""

    }
    const [appointmentInfo, setAppointmentInfo] = useState(initInfo);

    console.log(date);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'white',
        // border: '2px solid #000',
        borderRadius: 2,
        boxShadow: 24,
        p: 4,
    };

    const handleOnBlur = (e) => {
        const field = e.target.name
        const value = e.target.value
        const newInfo = { ...appointmentInfo };
        newInfo[field] = value;
        setAppointmentInfo(newInfo)
        console.log(appointmentInfo);
    }

    const handleBooking = (e) => {
        e.preventDefault()
        const newappointment = {
            ...appointmentInfo,
            time: time,
            date: date.toDateString(),
            userName: user.displayName,
            userEmail: user.email,
            bookingInfo: booking

        }
        // send to the server
        fetch('http://localhost:5000/appointments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newappointment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setAppointmentSuccess(true)
                    handleClose();
                }
            });
        console.log(newappointment);
        // handleClose();
    }
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Box sx={{ p: 3 }}>
                    <Typography id="modal-modal-title" sx={{ textAlign: 'center', color: "#11d0da" }} variant="h6">
                        {name}
                    </Typography>
                    <form onSubmit={handleBooking}>

                        <TextField
                            id="outlined-basic"
                            sx={{ width: '100%', mt: 2, mb: 2 }}
                            size="small"
                            label="Time"
                            name='time'
                            disabled
                            value={time}
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-basic"
                            sx={{ width: '100%', mb: 2 }}
                            size="small"
                            type='text'
                            name='patientName'
                            required
                            onBlur={handleOnBlur}
                            defaultValue={user?.displayName}
                            label="Your Name"
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-basic"
                            sx={{ width: '100%', mb: 2 }}
                            size="small"
                            name='email'
                            type='email'
                            required
                            onBlur={handleOnBlur}
                            defaultValue={user?.email}
                            label="Email"
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-basic"
                            sx={{ width: '100%', mb: 2 }}
                            size="small"
                            onBlur={handleOnBlur}
                            type="number"
                            required
                            name='phoneNumber'
                            label="Phone Number"
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-basic"
                            sx={{ width: '100%', mb: 2 }}
                            size="small"
                            defaultValue={date.toDateString()}
                            disabled
                            label="Date"
                            name='date'
                            variant="outlined"
                        />

                        <Box sx={{ textAlign: 'right' }}>
                            <MuiButton type='submit'>Submit</MuiButton>
                        </Box>
                    </form>
                </Box>
            </Box>
        </Modal>
    );
};

export default BookingModal;