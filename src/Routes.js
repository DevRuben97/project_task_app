import React from 'react';

import AuthContainer from './views/auth/AuthContainer';
import Projects from './views/projects/Projects';
import TaskBoard from './views/TaskBoard/TaskBoard'; 

export const authenticatedRoutes= [
    {
        path: '/',
        index: ()=> <Projects/>,
        exact: true
    },
    {
        path: '/TaskBoard',
        index: ()=> <TaskBoard/>,
        exact: false
    }
]

export const authenticateRoute= {
    path: '/',
    index: ()=> <AuthContainer/>,
    exact: true
}