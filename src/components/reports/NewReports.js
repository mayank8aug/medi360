import { Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Form, Field } from 'react-final-form';
import arrayMutators from 'final-form-arrays'
import ReportList from './ReportList';
import { TextField } from 'final-form-material-ui';
import SaveIcon from '@material-ui/icons/Save';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createReport } from '../../actions/reports';

const useStyles = makeStyles(() => ({
    container: {
        margin: 16,
        width: '100%'
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
    }
}));

function NewReport() {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const onSubmit = (values) => {
        const formData = new FormData();
        for(let key in values) {
            if (key === 'reports') {
                values[key].forEach((report, index) => formData.append(`report_${index}`, report));
            } else {
                formData.append(key, values[key]);
            }
        }
        dispatch(createReport(formData));
    }
    const discardFn = () => {
        history.push('/medi360/reports');
    };

    return (
        <div className={classes.container}>
            <Form
                onSubmit={onSubmit}
                mutators={{
                    ...arrayMutators
                }}
                keepDirtyOnReinitialize
                initialValues={{ reports: [{}] }}
                render={({ handleSubmit, values }) => (
                    <form onSubmit={handleSubmit} encType="multipart/form-data" noValidate>
                        <Grid container>
                            <Grid item xs={12} className={classes.field}>
                                <Field
                                    fullWidth
                                    required
                                    name="title"
                                    component={TextField}
                                    type="text"
                                    label={<span className={classes.label}>Title</span>}
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
                        </Grid>
                        <ReportList />
                        <div className={classes.submitButton}>
                            <Button onClick={discardFn} className={classes.btn} size="large" variant="contained">Discard</Button>
                            <Button className={classes.btn} size="large" variant="contained" color="primary" type="submit" startIcon={<SaveIcon />}>Save</Button>
                        </div>
                    </form>
                )}
            />
        </div>
    );
}

export default NewReport;
