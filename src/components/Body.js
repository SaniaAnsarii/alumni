import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login' // Ensure Login is imported correctly
import Dashboard from './Dashboard'
import Achievements from './Achievements'
import Directory from './Directory'
import Success from './Success'
import Feedback from './Feedback'
import Jobs from './Jobs'
import Events from './Events'
import Project from './Project'
import Scholarship from './Scholarship'

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path:"dashboard",
            element:<Dashboard/>
        },
        {
           path:"achivements",
           element:<Achievements/>
        },
        {
          path:"directory",
          element:<Directory/>
        },
        {
            path:"success",
            element:<Success/>
        },
        {
            path:"feedback",
            element:<Feedback/>
        },
        {
            path:"jobs",
            element:<Jobs/>
        },
        {
            path:"events",
            element:<Events/>
        },
        {
            path:"project",
            element:<Project/>
        },
        {
            path:"scholarship",
            element:<Scholarship/>
        }

    ]);

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    );
}

export default Body;
