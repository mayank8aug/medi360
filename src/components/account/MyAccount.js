import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getProfile } from '../../actions/profile';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(() => ({
    spinner: {
        position: 'absolute',
        top: '50%',
        left: '50%'
    },
    header: {
        fontWeight: 700,
        fontSize: 18,
        padding: '16px 16px 0 16px'
    },
    list: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    listItem: {
        flexBasis: '480%'
    }
}));

function MyAccount() {
    const classes = useStyles();
    const { loading, profile } = useSelector(state => state.profile);
    const { userDetails } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    useEffect(() => {
        if (!profile) {
            dispatch(getProfile({ username: userDetails?.username }));
        }
    }, [profile, dispatch, userDetails]);
    if (loading) {
        return (
            <CircularProgress className={classes.spinner} />
        );
    }

    const { address, gender, weight, bloodgroup, dob, emergencyphone, aadharnumber, fullname, username, height } = profile;
    return (
        <div>
            <div className={classes.header}>Personal Details</div>
            <List className={classes.list}>
                <ListItem className={classes.listItem}>
                    <ListItemText primary="Username" secondary={username || '-'} />
                </ListItem>
                <ListItem className={classes.listItem}>
                    <ListItemText primary="Full Name" secondary={fullname || '-'} />
                </ListItem>
                <ListItem className={classes.listItem}>
                    <ListItemText primary="Emergency Contact" secondary={emergencyphone || '-'} />
                </ListItem>
                <ListItem className={classes.listItem}>
                    <ListItemText primary="Blood Group" secondary={bloodgroup || '-'} />
                </ListItem>
                <ListItem className={classes.listItem}>
                    <ListItemText primary="Aadhar Number" secondary={aadharnumber || '-'} />
                </ListItem>
                <ListItem className={classes.listItem}>
                    <ListItemText primary="DOB" secondary={dob || '-'} />
                </ListItem>
                <ListItem className={classes.listItem}>
                    <ListItemText primary="Gender" secondary={gender || '-'} />
                </ListItem>
                <ListItem className={classes.listItem}>
                    <ListItemText primary="Height" secondary={height || '-'} />
                </ListItem>
                <ListItem className={classes.listItem}>
                    <ListItemText primary="Weight" secondary={weight || '-'} />
                </ListItem>
                <ListItem className={classes.listItem}>
                    <ListItemText primary="Address" secondary={address || '-'} />
                </ListItem>
            </List>
        </div>
    );
}

export default MyAccount;
