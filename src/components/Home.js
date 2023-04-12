import React from 'react';
import { renderObject } from '../utils';

const Home = (props) => {
    console.log(props);

    return (
        <div>
          <h2>Home</h2>
          <div>
            <strong>Props</strong>
            {renderObject(props)}
          </div>
        </div>
    );
};

export default Home;
