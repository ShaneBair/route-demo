import React from 'react';

import { renderObject } from '../utils';

const About = (props) => {
    console.log(props);

    return (
        <div>
          <h2>About</h2>
          <div>
            <strong>Props</strong>
            {renderObject(props)}
          </div>
        </div>
    );
};

export default About;
