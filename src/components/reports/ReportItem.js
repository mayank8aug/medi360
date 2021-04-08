import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles({
    root: {
        maxWidth: '100%',
        marginTop: 8,
        marginBottom: 8
    },
    content: {
        padding: 8
    },
    actions: {
        justifyContent: 'space-between'
    },
    removeIcon: {
        color: '#d66'
    },
    diagnosis: {
        fontSize: 14,
        marginBottom: 0,
    },
    diagnosedData: {
        fontSize: 14,
        fontWeight: 500,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    summary: {
        fontSize: 14
    },
    edit: {
        paddingLeft: 40
    }
});

function ReportItem(props) {
    const classes = useStyles();
    const { report } = props;
    const { diagnosis, summary, reportdate } = report
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent className={classes.content}>
                    <Typography variant="body2" component="div" className={classes.diagnosedData}>
                        <span>Diagnosed on: <strong>{reportdate}</strong></span>
                        <span>
                            <Button size="small" color="primary" className={classes.edit}>
                                <EditIcon fontSize="small" />
                            </Button>
                        </span>
                    </Typography>
                    <Typography gutterBottom component="div" className={classes.diagnosis}>
                        <strong>{diagnosis}</strong>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="div" className={classes.summary}>
                        {summary}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default ReportItem;