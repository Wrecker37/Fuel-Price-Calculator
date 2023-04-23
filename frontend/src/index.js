import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import Calculator from './routes/calculator';
import Profile from './routes/profile';
import Login from './routes/login';
import Register from './routes/register';
import QuoteHistory from './routes/quotehistory';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
    {
      path: "/calculator",
      element: <Calculator />,
    },
    {
      path: "/quotehistory",
      element: <QuoteHistory />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
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
