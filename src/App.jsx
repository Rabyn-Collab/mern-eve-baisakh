import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import NotFound from './features/not-found/NotFound';
import UserForm from './features/user/UserForm';
import UserList from './features/user/UserList';
import UserUpdateForm from './features/user/UserUpdateForm';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <UserList />,
        },
        {
          path: 'user-form',
          element: <UserForm />
        },

        {
          path: 'update-form/:id',
          element: <UserUpdateForm />
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
