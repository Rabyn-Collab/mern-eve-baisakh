import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import NotFound from './features/not-found/NotFound';
import ArticleList from './features/articles/ArticleList';
import ArticleForm from './features/articles/ArticleForm';
import UpdateArticleForm from './features/articles/UpdateArticleForm';


export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <ArticleList />
        },
        {
          path: 'article-form',
          element: <ArticleForm />
        },
        {
          path: 'update-article-form/:id',
          element: <UpdateArticleForm />
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
