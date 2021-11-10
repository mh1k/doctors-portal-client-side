import React from 'react';
import { Redirect, Route } from 'react-router';
import CircularProgress from '@mui/material/CircularProgress';
import useAuth from '../../Hooks/useAuth';
import { Box } from '@mui/system';

const AdminRoute = ({ children, ...rest }) => {
    const { user,admin, isOnLoading } = useAuth();
    if (isOnLoading) {
        return <Box sx={{ mx: 'auto', width:'100%', display:'flex',justifyContent: 'center' ,mt:5 }}><CircularProgress /></Box>
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user?.email && admin ? children
                : <Redirect
                    to={{
                        pathname: '/',
                        state: { from: location }
                    }}>
                </Redirect>}>
        </Route>
    );
};

export default AdminRoute;