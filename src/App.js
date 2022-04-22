import Events from './pages/Events/Events';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import EventDetail from './pages/EventDetail/EventDetail';
import Header from './components/Header/Header';
import React from 'react';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import { useHistory } from 'react-router-dom';
import {AppRoot} from './App.styled';
import {customTheme} from './theme';
import {ThemeProvider} from '@mui/system';
import Divider from '@mui/material/Divider';
import {
  ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles';

function App() {
  const history =  useHistory();
  return (
    <MuiThemeProvider theme={customTheme}>
      <ThemeProvider theme={customTheme}>
        <AppRoot id="app">
          <Router history={history}>
            <Header/>
            <Divider/>
            <Switch>
              <Route exact path="/" component={Events} />
              <Route path="/event/:id" component={EventDetail} />
              <Route component={PageNotFound} />
            </Switch>
          </Router>
        </AppRoot>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
