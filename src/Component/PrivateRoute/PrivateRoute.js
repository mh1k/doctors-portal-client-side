import React from 'react';
import { Redirect, Route } from 'react-router';
import CircularProgress from '@mui/material/CircularProgress';
import useAuth from '../../Hooks/useAuth';
import { Box } from '@mui/system';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isOnLoading } = useAuth();
    if (isOnLoading) {
        return <Box sx={{ mx: 'auto', width:'100%', display:'flex',justifyContent: 'center' ,mt:5 }}><CircularProgress /></Box>
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user?.email ? children
                : <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: location }
                    }}>
                </Redirect>}>
        </Route>
    );
};

export default PrivateRoute;