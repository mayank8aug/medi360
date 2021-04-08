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
            <img src="https://mayank8aug.github.io/medi360/logo.png" alt="logo" width={100} height={85} />
        </div>
    );
}

export default Logo;
