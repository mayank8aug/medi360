import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { toggleSidebar } from '../../actions/sidebar';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    appBar: {
        color: '#fff'
    }
}));

function Header() {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const handleDrawer = useCallback(() => {
        dispatch(toggleSidebar());
    }, [dispatch]);
    return (
        <AppBar className={classes.appBar}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawer}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" onClick={() => history.push('/medi360/')}>
                    <strong>Medi360</strong>
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;