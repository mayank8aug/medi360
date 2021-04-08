
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
import Reports from './components/reports/Reports';
import NewReport from './components/reports/NewReports';

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
                <Route path="/medi360/" exact component={Home} />
                <Route path="/medi360/account" exact component={MyAccount} />
                <Route path="/medi360/reports" exact component={Reports} />
                <Route path="/medi360/new-report" exact component={NewReport} />
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