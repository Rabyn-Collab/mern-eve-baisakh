import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import NotFound from './features/not-found/NotFound';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,

        },


        {
          path: '*',
          element: <NotFound />
        }
      ]
    }

  ]);
  return <RouterProvider router={router} />
}
