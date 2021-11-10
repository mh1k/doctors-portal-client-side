import { Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import MuiButton from '../../StyledComponent/MuiButton';
import Navigation from '../Shared/Navigation/Navigation';
import { useLocation, useHistory } from 'react-router';

const Register = () => {

    const { user, logOut, registerUser, loginUser } = useAuth();

    const [registerData, setRegisterData] = useState({})

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {

        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...registerData }
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);
        console.log(registerData);


    }

    const handleRegister = e => {
        console.log(registerData);
        e.preventDefault();
        if (registerData.password !== registerData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(registerData.email, registerData.password, registerData.name, location, history)
    }

    return (
        <>
            <Navigation></Navigation>
            <Container sx={{ mt: 0 }}>
                <Grid container>
                    <Grid item xs={12} md={6} sx={{ textAlign: 'center', display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ width: "100%" }}>
                            <Typography variant="body1" gutterBottom>Register</Typography>
                            <form onSubmit={handleRegister}>
                                <TextField
                                    id="outlined-basic"
                                    sx={{ width: '60%', mb: 2, mt: 4 }}
                                    size="small"
                                    type="text"
                                    name="name"
                                    onChange={handleOnBlur}
                                    // onBlur={handleOnBlur}
                                    label="Your Name"
                                    variant="outlined"
                                />
                                <TextField
                                    id="outlined-basic"
                                    sx={{ width: '60%', mb: 2 }}
                                    size="small"
                                    type="email"
                                    name="email"
                                    onChange={handleOnBlur}
                                    // onBlur={handleOnBlur}
                                    label="Your Email"
                                    variant="outlined"
                                />
                                <br />
                                <TextField
                                    id="outlined-basic"
                                    sx={{ width: '60%', mb: 2 }}
                                    size="small"
                                    type="password"
                                    name="password"
                                    onChange={handleOnBlur}
                                    // onBlur={handleOnBlur}
                                    label="Password"
                                    variant="outlined"
                                />
                                <TextField
                                    id="outlined-basic"
                                    sx={{ width: '60%', mb: 2 }}
                                    size="small"
                                    type="password"
                                    name="password2"
                                    onChange={handleOnBlur}
                                    // onBlur={handleOnBlur}
                                    label="Password"
                                    variant="outlined"
                                />
                                <MuiButton sx={{ width: '60%', mb: 2 }} type='submit'>Register</MuiButton>

                            </form>
                            <Link to='/login'>Alredy register ? Please login </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src="https://i.ibb.co/QFCkmbr/login.png" width="100%" alt="" />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Register;