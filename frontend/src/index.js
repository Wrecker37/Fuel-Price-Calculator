import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import LogIn from './routes/login';
import Calculator from './routes/calculator';
import Profile from './routes/profile';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
    {
      path: "/login",
      element: <LogIn />,
    },
    {
      path: "/calculator",
      element: <Calculator />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
