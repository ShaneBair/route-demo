import React from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { renderObject } from '../utils';
import { Card, Container } from 'react-bootstrap';

export const Arts = (props) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Arts</Card.Title>
        <p>This is the arts subcomponent.</p>
      </Card.Body>
    </Card>
  );
};

export const Crafts = (props) => {
  let location = useLocation();
  let params = useParams();

  console.log(params, location);
  console.log(props);

  return (
    <Card>
      <Card.Body>
        <Card.Title>Crafts</Card.Title>
        <p>This is the crafts subcomponent.</p>
        <p>You are currently {!props.isLogged ? "not " : ""}logged in.</p>
        <div>
          <strong>Props</strong>
          {renderObject(props)}
        </div>
      </Card.Body>
    </Card>
  );
};

export const Topics = (props) => {

    return (
        <div>
          <h2>Topics</h2>
          <div>
            <strong>Props</strong>
            {renderObject(props)}
          </div>

          <ul>
            <li><Link to="/topics/arts">Arts</Link></li>
            <li><Link to="/topics/crafts">Crafts</Link></li>
          </ul>

          <Container className='topics-container'>
            <Outlet />
          </Container>
        </div>
      );
};

export default Topics;
