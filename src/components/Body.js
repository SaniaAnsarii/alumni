import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login' // Ensure Login is imported correctly
import Achievements from './Achievements'
import Directory from './Directory'
import Success from './Success'
import Feedback from './Feedback'
import Jobs from './Jobs'
import Events from './Events'
import Project from './Project'
import Scholarship from './Scholarship'
import Gallery from './Gallery'
import Home from './Home'
import Welcome from './Welcome'

const Body = () => {
    const appRouter = createBrowserRouter([
      {
        path:"/",
        element:<Welcome/>
      },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/directory",
          element: <Directory />
        },
        {
          path: "/home",
          element: <Home />,
        },

        {
          path: "/achievements",
          element: <Achievements />
        },
        {
          path: "/success",
          element: <Success />
        },
        {
          path: "/feedback",
          element: <Feedback />
        },
        {
          path: "/jobs",
          element: <Jobs />
        },
        {
          path: "/events",
          element: <Events />
        },
        {
          path: "/project",
          element: <Project />
        },
        {
          path: "/scholarship",
          element: <Scholarship />
        },
        {
          path:"/gallery",
          element:<Gallery/>
        }

            
        

      ]);
      

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    );
}

export default Body;
