import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { routeConfig } from '../routing/routes';

const PageNotFound = () => {
    const location = useLocation();
    console.log(location);
    return (
        <>
            <div>
                <h2>Page Not Found</h2>
                <p><strong>Attempted Path:</strong> {location.pathname}</p>
                <p>Perhaps the route you are looking for is dynamically disabled or just fictional.</p>
            </div>
            <div>
                <p>For reference, here are all the routes available:</p>
                <ul>
                    {routeConfig.map((route, idx) => {                        
                        return (
                        <li key={idx}>
                            <Link activeClassName="active" to={route.path}>{route.title}</Link>
                        </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};
export default PageNotFound;