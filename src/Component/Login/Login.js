import { Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import MuiButton from '../../StyledComponent/MuiButton';
import Navigation from '../Shared/Navigation/Navigation';
import { useLocation, useHistory } from 'react-router';
import LinearProgress from '@mui/material/LinearProgress';

const Login = () => {

    const [loginData, setLoginData] = useState({})

    const { loginUser, isLoading, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory()

    const handleOnBlur = e => {

        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData);


    }

    const handleLogin = e => {

        e.preventDefault()

        loginUser(loginData.email, loginData.password, location, history)

    }
    const handleGoogleLogin = () => {
        signInWithGoogle(location,history)
    }

    return (
        <>
            <Navigation></Navigation>
            <Container sx={{ mt: 0 }}>
                <Grid container>
                    <Grid item xs={12} md={6} sx={{ textAlign: 'center', display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ width: "100%" }}>
                            <Typography variant="body1" gutterBottom>Login</Typography>
                            <form onSubmit={handleLogin}>
                                <TextField
                                    id="outlined-basic"
                                    sx={{ width: '60%', mb: 2, mt: 4 }}
                                    size="small"
                                    required
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
                                    required
                                    type="password"
                                    name="password"
                                    onChange={handleOnBlur}
                                    // onBlur={handleOnBlur}
                                    label="Password"
                                    variant="outlined"
                                />
                                <Box sx={{ width: '60%', mx: 'auto', height: '4px' }}>
                                    {isLoading && <LinearProgress />}
                                </Box>
                                <MuiButton loading sx={{ width: '60%', mb: 2 }} type='submit'>
                                    Login
                                </MuiButton>

                            </form>
                            <Link to='/register'>New User ? Please Register</Link>
                            <br />
                            <MuiButton loading sx={{ width: '60%', mt: 2 }} onClick={handleGoogleLogin} >
                                Continiue With Google
                            </MuiButton>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src="https://i.ibb.co/QFCkmbr/login.png" width="100%" alt="" />
                    </Grid>
                </Grid>
            </Container></>
    );
};

export default Login;