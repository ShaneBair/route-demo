import { Button } from 'react-bootstrap';
import { renderObject } from '../utils';

const Login = (props) => {
    console.log(props);

    return (
        <div>
          <h2>Login</h2>
          <div>
            <strong>Props</strong>
            {renderObject(props)}
          </div>
          <Button variant="success" onClick={() => {props.setLoggedIn(true)}} disabled={props.isLogged}>Login</Button>
        </div>
    );
};

export default Login;