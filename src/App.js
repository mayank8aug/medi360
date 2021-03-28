
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import MyAccount from './components/account/MyAccount'
import { makeStyles } from '@material-ui/core/styles';
import { theme } from './utils/ui';
import { ThemeProvider } from '@material-ui/styles';
import { useSelector } from 'react-redux';
import ToastMessage from './components/notifications/ToastMessage';
import Auth from './components/auth/Auth';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    marginTop: 64
  },
}));

function App() {
  const classes = useStyles();
  const { loggedIn } = useSelector(state => state.auth);
  return (
    <div>
      <Router>
        <ThemeProvider theme={theme}>
          {loggedIn ?
            <>
              <Header />
              <div className={classes.container}>
                <Sidebar />
                <Route path="/" exact component={Home} />
                <Route path="/account" exact component={MyAccount} />
              </div>
            </> :
            <Auth />
          }
          <ToastMessage />
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;