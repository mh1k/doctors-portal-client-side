import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ backgroundColor: "white", color: 'gray', boxShadow: 0 }}>
                    {/* <Container> */}
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Doctors Portal
                        </Typography>
                        <NavLink style={{ textDecoration: 'none', color: 'black' }} to='/appointment'>
                            <Button color="inherit">Appointment</Button>
                        </NavLink>
                        {
                            user?.email && <NavLink style={{ textDecoration: 'none', color: 'black' }} to='/dashboard'>
                                <Button color="inherit">Dashboard</Button>
                            </NavLink>
                        }
                        {
                            user?.email && <Typography sx={{ mx: 3 }}>{user?.displayName}</Typography>
                        }
                        {
                            user?.email ?

                                <Button style={{ textDecoration: 'none', color: 'black' }} onClick={logOut} color="inherit">Logout</Button>
                                :
                                <NavLink style={{ textDecoration: 'none', color: 'black' }} to='/login'>
                                    <Button color="inherit">Login</Button>
                                </NavLink>
                        }
                    </Toolbar>
                    {/* </Container> */}
                </AppBar>
            </Box>
        </div>
    );
};

export default Navigation;