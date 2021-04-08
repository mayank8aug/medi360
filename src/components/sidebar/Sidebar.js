import React, { useCallback } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { toggleSidebar } from '../../actions/sidebar';
import { menuItems } from '../../menu';
import { logout } from '../../actions/auth';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

const icons = {
    Home: HomeIcon,
    'My Account': AccountCircleIcon,
    Reports: LibraryBooksIcon,
    Logout: ExitToAppIcon
};

const useStyles = makeStyles((theme) => ({
    drawer: {
        top: 64,
        width: 0,
        transition: theme.transitions.create(['width'], {
            easing: theme.transitions.easing.easeIn,
            duration: 200,
        })
    },
    drawerOpen: {
        width: 240
    },
    selected: {
        color: theme.palette.primary.main
    },
    item: {
        whiteSpace: 'nowrap'
    }
}));

function Sidebar() {
    const { pathname } = useLocation();
    const { expanded } = useSelector(state => state.sidebar);
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const redirect = useCallback((url) => {
        if (url === '/medi360/logout') {
            dispatch(logout());
            url = '/medi360/';
        }
        history.push(url);
        dispatch(toggleSidebar());
    }, [dispatch, history]);
    return (
        <Drawer
            variant="permanent"
            classes={{
                paper: `${classes.drawer} ${expanded ? classes.drawerOpen : ''}`
            }}
        >
            <List>
                {menuItems.map(({ label, url }, index) => {
                    const IconComponent = icons[label];
                    return (
                        <ListItem className={classes.item} button key={label} onClick={() => redirect(`/medi360${url}`)}>
                            <ListItemIcon><IconComponent color={`${pathname === url ? 'primary' : 'inherit'}`} /></ListItemIcon>
                            <ListItemText primary={label} className={`${pathname === url ? classes.selected : ''}`} />
                        </ListItem>
                    )
                })}
            </List>
        </Drawer>
    );
}

export default Sidebar;