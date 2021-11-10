import { Alert, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import MuiButton from '../../../StyledComponent/MuiButton';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const {token}=useAuth();
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleMakeAdmin = e => {
        const user = { email }
        e.preventDefault()
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'authorization':`Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    setEmail('')
                    setSuccess(true);
                }
            })
    }
    return (
        <div>
            <Box>
                <form onSubmit={handleMakeAdmin}>

                    <TextField
                        id="outlined-basic"
                        sx={{ width: '40%', mb: 2 }}
                        size="small"
                        name='email'
                        type='email'
                        required
                        onBlur={handleOnBlur}
                        label="Email"
                        variant="outlined"
                    />
                    <br />
                    <MuiButton sx={{ width: '40%', mb: 2 }} type='submit'>Make Admin</MuiButton>
                    {
                        success && <Alert severity='success'>Made Admin Successfully</Alert>
                    }
                </form>

            </Box>
        </div>
    );
};

export default MakeAdmin;