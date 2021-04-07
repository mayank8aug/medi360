import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    container: {
        textAlign: 'center'
    }
}));

function Logo() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <img src="/logo.png" alt="logo" width={100} />
        </div>
    );
}

export default Logo;
