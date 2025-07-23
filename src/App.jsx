import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import NotFound from './features/not-found/NotFound';

import Home from './features/home/Home';
import RecipeSearch from './features/search/RecipeSearch';


export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />

        },

        {
          path: 'recipes/search',
          element: <RecipeSearch />

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
