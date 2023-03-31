import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import {
  createBrowserRouter,
  RouterProvider,
  // Router,
} from 'react-router-dom';



//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  },
  {
    path: 'home',
    element: <Home/>,
  },
  {
    path: 'about',
    element: <About/>, 
  },
  {
    path: 'skills',
    element: <Skills/>,
  },
  {
    path: 'portfolio',
    element: <Portfolio/>,
  },
  {
    path: 'contact',
    element: <Contact/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<RouterProvider router={router}/>
);