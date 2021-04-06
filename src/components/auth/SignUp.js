import { TextField, Checkbox } from 'final-form-material-ui';
import React from 'react';
import { Field, Form } from 'react-final-form';
import { Grid, FormControlLabel, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { isNotEmpty, isValidEmail } from '../../utils/validate';
import { useDispatch } from 'react-redux';
import { register } from '../../actions/auth';

const useStyles = makeStyles((theme) => ({
    form: {
        margin: 32
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
    }
}));

function SignUp() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const onSubmit = (values) => {
        dispatch(register(values));
    };
    return (
        <>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit, submitting, values }) =>
                    <form onSubmit={handleSubmit} className={classes.form} noValidate>
                        <div className={classes.title}>Sign Up</div>
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
                            <Grid item xs={12} className={classes.field}>
                                <Field
                                    fullWidth
                                    required
                                    validate={isNotEmpty}
                                    name="password"
                                    component={TextField}
                                    type="password"
                                    label={<span className={classes.label}>Password</span>}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} className={classes.field}>
                                <FormControlLabel
                                    label={<span>I agree to the <Link className={classes.link} to="">Terms of Service</Link></span>}
                                    control={
                                        <Field
                                            name="tnc"
                                            component={Checkbox}
                                            type="checkbox"
                                            color="primary"
                                        />
                                    }
                                />
                            </Grid>
                            <Button fullWidth type="submit" disabled={submitting || !values.tnc} variant="contained" color="primary" className={classes.button}>
                                Sign Up
                        </Button>
                        </Grid>
                    </form>
                }
            />
            <Grid container justify="space-around"><Grid item>I'm already a member. <Link className={classes.link} to="/">Sign In</Link></Grid></Grid>
        </>
    )
}

export default SignUp;
