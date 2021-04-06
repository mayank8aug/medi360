import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { clearNotification } from '../../actions/notifications';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

function ToastMessage() {
    const { message, timeout, severity } = useSelector(state => state.notifications);
    const classes = useStyles();
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(clearNotification());
    };
    if (!message) return null;
    return (
        <div className={classes.root}>
            <Snackbar open={Boolean(message)} autoHideDuration={timeout} onClose={handleClose}>
                <Alert onClose={handleClose} severity={severity}>
                    {message}
                </Alert>
            </Snackbar>
        </div>
    );
}

export default ToastMessage;
