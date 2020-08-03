import React from 'react'
import { 
  Route, 
  BrowserRouter as Router,
} from 'react-router-dom';
import Analytics from './utils/analytics'

import Home from './pages/Home';
import Single from './pages/Single';

const AppRoutes = () => {
  return (
    <Router basename='/seminovos-duna'>
      <Analytics>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/:id">
          <Single />
        </Route>
      </Analytics>
    </Router>
  );
}

export default AppRoutes;