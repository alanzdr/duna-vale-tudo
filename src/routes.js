import React from 'react'
import { 
  Route, 
  BrowserRouter as Router,
} from 'react-router-dom';

import Home from './pages/Home';
import Single from './pages/Single';

const AppRoutes = ({ data }) => {
  return (
    <Router basename='/valetudo'>
      <Route path="/" exact>
        <Home data={data}/>
      </Route>
      <Route path="/:path">
        <Single data={data}/>
      </Route>
    </Router>
  );
}

export default AppRoutes;