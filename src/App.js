import './App.css';

import React, { useState } from 'react';
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import RoutingService from './routing/RoutingService';
import { routeConfig } from './routing/routes';
import { Container } from 'react-bootstrap';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const routingServiceProps = {
    loggedIn: loggedIn,
    setLoggedIn: setLoggedIn,
    workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  };

  return (
    <div className="App">
      <Router>
        <ul className='navbar'>
          {Object.entries(routeConfig).map(([routeKey, route], idx) => {
            if(route.hideFromNav) return;

            return (
              <li key={idx}>
                <NavLink activeClassName="active" to={route.navigatePath ?? route.path}>{route.title}</NavLink>
              </li>
            );
          })}
        </ul>

        <Container>
          <RoutingService {...routingServiceProps} />
        </Container>
      </Router>
    </div>
  );
}

export default App;
