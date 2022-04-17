import Events from './pages/Events/Events';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import EventDetail from './pages/EventDetail/EventDetail';
import Header from './components/Header/Header';
import React from 'react';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import { useHistory } from 'react-router-dom';

function App() {
  const history =  useHistory();
  return (
  <div>
     <Router history={history}>
      <Header />
        <Switch>
          <Route exact path="/" component={Events} />
          <Route path="/event/:id" component={EventDetail} />
          <Route component={PageNotFound} />
        </Switch>
     </Router>
    </div>
  );
}

export default App;
