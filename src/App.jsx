import React from 'react'
import { createBrowserRouter } from 'react-router'
import Home from './pages/home/Home';
import { RouterProvider } from 'react-router-dom';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Page1 from './pages/home/nested/Page1';
import Page2 from './pages/home/nested/Page2';
import RootLayout from './components/RootLayout';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'contact',
          element: <Contact />
        }
      ]
    }

  ]);
  return <RouterProvider router={router} />
}
