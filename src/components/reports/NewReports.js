import { Button, Grid, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Form, Field } from 'react-final-form';
import arrayMutators from 'final-form-arrays'
import ReportList from './ReportList';
import { TextField } from 'final-form-material-ui';
import SaveIcon from '@material-ui/icons/Save';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createReport, getReports } from '../../actions/reports';
import { setNotification } from '../../actions/notifications';

const useStyles = makeStyles(() => ({
    container: {
        margin: 16,
        width: '100%',
        paddingBottom: '66px'
    },
    submitButton: {
        position: 'fixed',
        bottom: 0,
        padding: '12px 0',
        background: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        width: 'calc(100% - 32px)'
    },
    btn: {
        flexBasis: '48%'
    },
    label: {
        fontWeight: 700,
    },
    field: {
        marginBottom: 20
    },
    marginLeft: {
        marginLeft: 16
    },
    white: {
        color: '#fff'
    }
}));

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

function NewReport() {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const { userDetails } = useSelector(state => state.auth);
    const { loading, created } = useSelector(state => state.reports);
    
    const redirectToReports = () => {
        history.push('/medi360/reports');
    };

    if (!loading && created) {
        dispatch(getReports());
        redirectToReports();
    }
    const onSubmit = (values) => {
        const file = values.reports[0];
        getBase64(file).then(
            data => {
                const request = { ...values };
                delete request.reports;
                const formData = {
                    values: { ...request, username: userDetails.username },
                    report: data
                }
                dispatch(createReport(formData));
            }
        ).catch(() => {
            dispatch(setNotification({
                message: 'System Error: Unable to process report',
                severity: 'error',
                timeout: 4000
            }));
        })
        /* const formData = new FormData();
        for (let key in values) {
            if (key === 'reports') {
                values[key].forEach((report, index) => formData.append(`report_${index}`, report));
            } else {
                formData.append(key, values[key]);
            }
        }
        dispatch(createReport(formData)); */
    }

    return (
        <div className={classes.container}>
            <Form
                onSubmit={onSubmit}
                mutators={{
                    ...arrayMutators
                }}
                keepDirtyOnReinitialize
                initialValues={{ reports: [{}] }}
                render={({ handleSubmit, submitting, values }) => (
                    <form onSubmit={handleSubmit} encType="multipart/form-data" noValidate>
                        <Grid container>
                            <Grid item xs={12} className={classes.field}>
                                <Field
                                    fullWidth
                                    required
                                    name="diagnosis"
                                    component={TextField}
                                    type="text"
                                    label={<span className={classes.label}>Diagnosis</span>}
                                    placeholder="Corona Tests"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} className={classes.field}>
                                <Field
                                    fullWidth
                                    name="summary"
                                    component={TextField}
                                    type="text"
                                    label={<span className={classes.label}>Summary</span>}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} className={classes.field}>
                                <Field
                                    fullWidth
                                    name="reportdate"
                                    component={TextField}
                                    type="date"
                                    defaultValue={new Date().toISOString().split('T')[0]}
                                    label={<span className={classes.label}>Report Date</span>}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <ReportList />
                        <div className={classes.submitButton}>
                            <Button onClick={redirectToReports} className={classes.btn} size="large" variant="contained">Discard</Button>
                            <Button className={classes.btn} size="large" variant="contained" color="primary" type="submit" startIcon={loading || submitting ? null : <SaveIcon />}>
                                {(loading || submitting) ? <CircularProgress size={24} className={classes.white} /> : 'Save'}
                            </Button>
                        </div>
                    </form>
                )}
            />
        </div>
    );
}

export default NewReport;
