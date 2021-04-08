import { useCallback } from "react";
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import ReportsList from "./ReportsList";

const useStyles = makeStyles(() => ({
    container: {
        margin: 12,
        width: '100%'
    },
    addBtn: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    header: {
        fontSize: 24,
        fontWeight: 500
    }
}));

function Reports() {
    const classes = useStyles();
    const history = useHistory();
    const addNewReport = useCallback(() => {
        history.push('/medi360/new-report');
    }, [history]);
    return (
        <div className={classes.container}>
            <div className={classes.addBtn}>
                <div className={classes.header}>All Reports</div>
                <Button color="primary" variant="contained" onClick={addNewReport}>+ Report</Button>
            </div>
            <ReportsList />
        </div>
    )
}

export default Reports;