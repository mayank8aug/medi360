import { useCallback } from "react";
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        margin: 32
    }
}));

function Reports() {
    const classes = useStyles();
    const history = useHistory();
    const addNewReport = useCallback(() => {
        history.push('/medi360/new-report');
    }, [history]);
    return (
        <div className={classes.container}><Button color="primary" variant="contained" onClick={addNewReport}>+ New Report</Button></div>
    )
}

export default Reports;