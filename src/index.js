import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './pages/About';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import { createBrowserRouter, RouterProvider,  } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "about",
    element: <About/>
  },
  {
    path: "skills",
    element: <Skills/>,
  },
  {
    path: "portfolio",
    element: <Portfolio/>,
  },
  {
    path: "contact",
    element: <Contact/>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<RouterProvider router={router} />
);


