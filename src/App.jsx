import React from 'react'
import { createBrowserRouter } from 'react-router'
import Home from './pages/home/Home';
import { RouterProvider } from 'react-router-dom';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: 'about',
      element: <About />
    },
    {
      path: 'contact',
      element: <Contact />
    }
  ]);
  return <RouterProvider router={router} />
}
