import { TextField } from 'final-form-material-ui';
import React, { useState } from 'react';
import { Field, Form } from 'react-final-form';
import { Grid, Button, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { isNotEmpty, isValidEmail } from '../../utils/validate';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/auth';
import SocialAuth from './SocialAuth';
import Logo from '../branding/Logo';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    form: {
        margin: 20
    },
    title: {
        fontWeight: 700,
        marginBottom: 40,
        fontSize: 24
    },
    field: {
        marginBottom: 32
    },
    label: {
        fontWeight: 700,
    },
    button: {
        marginTop: 32
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        fontWeight: 600
    },
    separator: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: '14px'
    },
    eyeBtn: {
        position: 'absolute',
        right: '10px'
    },
    w100: {
        width: '100%'
    },
    white: {
        color: '#fff'
    }
}));

function SignIn() {
    const [showPassword, setShowPassword] = useState(false);
    const classes = useStyles();
    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.auth);
    console.log(loading);
    const onSubmit = (values) => {
        if (loading) return;
        dispatch(login(values));
    };
    return (
        <>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit, submitting, values }) =>
                    <form onSubmit={handleSubmit} className={classes.form} noValidate>
                        <Logo />
                        <div className={classes.title}>Sign In</div>
                        <Grid container justify="center">
                            <Grid item xs={12} className={classes.field}>
                                <Field
                                    fullWidth
                                    required
                                    validate={isValidEmail}
                                    name="username"
                                    component={TextField}
                                    type="text"
                                    label={<span className={classes.label}>Email</span>}
                                    placeholder="Your email address"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <div className={classes.w100}>
                                <Field
                                    fullWidth
                                    required
                                    validate={isNotEmpty}
                                    name="password"
                                    placeholder="********"
                                    component={TextField}
                                    type={showPassword ? 'text' : 'password'}
                                    label={<span className={classes.label}>Password</span>}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <IconButton
                                    className={classes.eyeBtn}
                                    aria-label="toggle password visibility"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </div>
                            <Button fullWidth type="submit" variant="contained" color="primary" className={classes.button}>
                                {(loading || submitting) ? <CircularProgress size={24} className={classes.white} /> : 'Login'}
                            </Button>
                        </Grid>
                    </form>
                }
            />
            <div className={classes.separator}>OR</div>
            <SocialAuth />
            <Grid container justify="space-around"><Grid item>I'm a new member. <Link className={classes.link} to={{ pathname: '/', state: { context: 'register' } }}>Sign Up</Link></Grid></Grid>
        </>
    )
}

export default SignIn;
