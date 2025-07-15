import { createBrowserRouter } from 'react-router'
import Home from './pages/home/Home';
import { RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import NotFound from './pages/not-found/NotFound';
import UserForm from './pages/user/UserForm';

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
          path: 'user-form',
          element: <UserForm />
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
