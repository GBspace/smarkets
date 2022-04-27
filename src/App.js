import Events from './pages/Events/Events';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import EventDetail from './pages/EventDetail/EventDetail';
import Header from './components/Header/Header';
import React from 'react';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import { useHistory } from 'react-router-dom';
import {customTheme} from './theme';
import {ThemeProvider} from '@mui/system';
import Divider from '@mui/material/Divider';
import {
  ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function App() {
  const history =  useHistory();
  return (
    <MuiThemeProvider theme={customTheme}>
      <ThemeProvider theme={customTheme}>
          <Router history={history}>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              '& > :not(style)': {
                m: 1,
                width: 300,
                height: 'auto',
              },
            }}
          >
          <Paper elevation={3}>
            <Header/>
            <br/>
            <Switch>
              <Route exact path="/" component={Events} />
              <Route path="/event/:id" component={EventDetail} />
              <Route component={PageNotFound} />
            </Switch>
            </Paper>
            </Box>
          </Router>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
