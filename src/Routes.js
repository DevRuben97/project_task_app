import React from 'react';

import AuthContainer from './views/auth/AuthContainer';
import Projects from './views/projects/Projects';

export const authenticatedRoutes= [
    {
        path: '/',
        index: ()=> <Projects/>,
        exact: true
    }
]

export const authenticateRoute= {
    path: '/',
    index: ()=> <AuthContainer/>,
    exact: true
}