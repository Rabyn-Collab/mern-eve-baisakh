import { createBrowserRouter } from 'react-router'
import Home from './pages/home/Home';
import { RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import NotFound from './pages/not-found/NotFound';
import MealItems from './pages/meal_item/MealItems';
import Meal from './pages/meal/Meal';

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
          path: 'meal-items/:category',
          element: <MealItems />

        },
        {
          path: 'meal/:id',
          element: <Meal />
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
