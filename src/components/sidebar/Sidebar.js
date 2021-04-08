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
import AddAlertIcon from '@material-ui/icons/AddAlert';
import StorefrontIcon from '@material-ui/icons/Storefront';
import { SiPreCommit } from "react-icons/si";
import CallToActionIcon from '@material-ui/icons/CallToAction';
import { ImLab } from "react-icons/im";

const icons = {
    Home: HomeIcon,
    'My Account': AccountCircleIcon,
    Reports: LibraryBooksIcon,
    Actions: CallToActionIcon,
    'Medicine Alerts': AddAlertIcon,
    Precautions: SiPreCommit,
    'Lab Bookings': ImLab,
    'Medical Stores': StorefrontIcon,
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
        width: 200
    },
    selected: {
        color: theme.palette.primary.main
    },
    item: {
        whiteSpace: 'nowrap'
    },
    icon: {
        minWidth: 40
    }
}));

function Sidebar() {
    const { pathname } = useLocation();
    const { expanded } = useSelector(state => state.sidebar);
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const redirect = useCallback((url) => {
        if (url === '/logout') {
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
                {menuItems.map(({ label, url }) => {
                    const IconComponent = icons[label];
                    const hackUrl = `/medi360${url}`
                    let selected = pathname === hackUrl;
                    if (pathname === '/medi360/new-report' && hackUrl === '/medi360/reports') selected = true;
                    return (
                        <ListItem className={classes.item} button key={label} onClick={() => redirect(hackUrl)}>
                            <ListItemIcon className={classes.icon}><IconComponent color={`${selected ? 'primary' : 'inherit'}`} /></ListItemIcon>
                            <ListItemText primary={label} className={`${selected ? classes.selected : ''}`} />
                        </ListItem>
                    )
                })}
            </List>
        </Drawer>
    );
}

export default Sidebar;