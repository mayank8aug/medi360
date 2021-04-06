import { Button, Typography } from '@material-ui/core';
import { FieldArray } from 'react-final-form-arrays';
import ReportField from './ReportField';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    label: {
        fontWeight: 700,
        fontSize: 12,
        color: 'rgba(0, 0, 0, 0.54)'
    }
}));

function ReportList() {
    const classes = useStyles();
    return (
        <FieldArray name="reports">
            {
                ({ fields }) => (
                    <>
                        <div><Typography className={classes.label}>Reports <Button disabled color="primary" onClick={() => fields.push({})}><AddOutlinedIcon /></Button></Typography></div>
                        {fields.map((name, index) => {
                            return (
                                <div className={classes.field} key={name}>
                                    <ReportField name={name} setFile={file => fields.value[index] = file} remove={() => fields.value[index] = null} />
                                </div>
                            )
                        })}
                    </>
                )
            }
        </FieldArray>
    )
}

export default ReportList;
