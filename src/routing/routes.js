import Home from '../components/Home';
import About from '../components/About';
import Topics, { Arts, Crafts } from '../components/Topics';
import Login from '../components/Login';
import Logout from '../components/Logout';
import PageNotFound from '../components/PageNotFound';

export const routeConfig = [
    {
        path: '/',
        title: 'Home',
        element: <Home />,
        disabled: false,
    },
    {
        path: '/about',
        title: 'About',
        propConfig: {
            isLogged: 'loggedIn'
        },
        createElement: (props) => {
            return <About {...props} />;
        },
        disabled: false,
    },
    {
        path: '/topics',
        navigatePath: '/topics',
        title: 'Topics',
        element: <Topics />,
        disabled: false,
        subroute: [
            {
                path: '/topics/arts',
                title: 'Arts',
                element: <Arts />,
                disabled: false,
            },
            {
                path: '/topics/crafts',
                title: 'Crafts',
                propConfig: {
                    isLogged: 'loggedIn'
                },
                createElement: (props) => {
                    return <Crafts {...props} />;
                },
                disabled: false,
            }
        ],
    },
    {
        path: '/login',
        title: 'Login',
        propConfig: {
            isLogged: 'loggedIn',
            setLoggedIn: 'setLoggedIn'
        },
        createElement: (props) => {
            return <Login {...props} />;
        },
        disabledPropConfig: {
            isLogged: 'loggedIn',
        },
        disabledCheck: (props) => {
            return props.isLogged;
        }
    },
    {
        path: '/logout',
        title: 'Logout',
        propConfig: {
            isLogged: 'loggedIn',
            setLoggedIn: 'setLoggedIn'
        },
        createElement: (props) => {
            return <Logout {...props} />;
        },
        disabledPropConfig: {
            isLogged: 'loggedIn',
        },
        disabledCheck: (props) => {
            return !props.isLogged;
        }
    },
    {
        path: '*',
        title: 'Page Not Found',
        element: <PageNotFound />,
        hideFromNav: true,
    }
];