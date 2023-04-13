import React from 'react';
import { Routes, Route } from "react-router-dom";
import {routeConfig} from './routes';

const propMapper = (desiredProps, propBank) => {
    const props = {};

    for(const [propKey, propValue] of Object.entries(desiredProps)) {
        props[propKey] = propBank[propValue];
    }
    return props;
};

export const RoutingService = (props) => {
    const createRoute = (route, key) => {
        if(route.disabled || (route.disabledCheck && route.disabledCheck(propMapper(route.disabledPropConfig, props)))) return;

        //console.log(route);
        return (
            <Route 
                key={key} 
                path={route.path} 
                element={route.element ?? route.createElement(propMapper(route.propConfig, props))} 
            >
                {route.subroute && Object.entries(route.subroute).map(([subrouteKey, subroute], idx) => {
                    return createRoute(subroute, idx);
                })}
            </Route>
        )
    };

    return (
        <Routes>
            {Object.entries(routeConfig).map(([routeKey, route], idx) => {
                return createRoute(route, idx);
            })}
        </Routes>
    );
};

export default RoutingService;