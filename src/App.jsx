import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import NotFound from './features/not-found/NotFound';
import Home from './features/home/Home.jsx';
import Login from './features/auth/Login.jsx';
import Register from './features/auth/Register.jsx';
import AdminPage from './features/admin/AdminPage.jsx';
import ProductAdd from './features/admin/ProductAdd.jsx';
import ProductUpdate from './features/admin/ProductUpdate.jsx';
import ProductDetail from './features/product/ProductDetail.jsx';
import CartPage from './features/carts/CartPage.jsx';

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
          path: 'admin-panel',
          element: <AdminPage />
        },

        {
          path: 'product-add',
          element: <ProductAdd />
        },

        {
          path: 'product-update/:id',
          element: <ProductUpdate />
        },

        {
          path: 'product-detail/:id',
          element: <ProductDetail />
        },

        {
          path: 'carts',
          element: <CartPage />
        },


        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'register',
          element: <Register />
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
