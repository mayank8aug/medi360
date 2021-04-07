import { Button } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    container: {
        margin: '20px',
        display: 'flex',
        width: 'calc(100% - 40px)',
        justifyContent: 'space-between'
    },
    btn: {
        textTransform: 'capitalize',
        color: '#fff',
        width: '160px',
        borderRadius: '4px',
        fontSize: '12px',
        padding: '8px'
    },
    fb: {
        background: '#3b5998',
        '&:hover': {
            background: '#3b5998',
            opacity: '0.6'
        }
    },
    google: {
        background: '#db3236',
        '&:hover': {
            background: '#db3236',
            opacity: '0.6'
        }
    }
}));

function SocialAuth() {
    const classes = useStyles();
    return (
        <div className={classes.container} >
            <Button className={`${classes.btn} ${classes.fb}`} variant="contained">Continue with Facebook</Button>
            <Button className={`${classes.btn} ${classes.google}`} variant="contained">Continue with Google</Button>
        </div>
    );
}

export default SocialAuth;