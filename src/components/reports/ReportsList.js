import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReports } from "../../actions/reports";
import ReportItem from "./ReportItem";
import { CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    spinner: {
        position: 'absolute',
        top: '50%',
        left: '50%'
    }
}));

function ReportsList() {
    const classes = useStyles();
    const { reports, loading } = useSelector(state => state.reports);
    const { userDetails } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    useEffect(() => {
        if (!reports) {
            dispatch(getReports({ username: userDetails.username }));
        }
    }, [reports, dispatch, userDetails]);
    if (loading) {
        return (
            <CircularProgress className={classes.spinner} />
        );
    }
    return (
        <div>
            {reports?.map(report => <ReportItem report={report} />)}
        </div>
    );
}

export default ReportsList;