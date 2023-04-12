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
                {route.subroute?.map((subroute, subkey) => {
                    return createRoute(subroute, subkey);
                })}
            </Route>
        )
    };

    return (
        <Routes>
            {routeConfig.map((route, key) => {
                return createRoute(route, key);
            })}
        </Routes>
    );
};

export default RoutingService;