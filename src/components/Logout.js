import { Button } from 'react-bootstrap';
import { renderObject } from '../utils';

const Logout  = (props) => {
    console.log(props);

    return (
        <div>
          <h2>Logout</h2>
          <div>
            <strong>Props</strong>
            {renderObject(props)}
          </div>
          <Button variant="danger" onClick={() => {props.setLoggedIn(false)}} disabled={!props.isLogged}>Logout</Button>
        </div>
    );
};

export default Logout;