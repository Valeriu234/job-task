import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider } from '@apollo/client';
import client from './apollo/client';
import ArticleProvider from './contexts/ArticleContext/ArticleProvider';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Articles from './components/article-list';
import News from './pages/news';
import SelectedArticlePage from './pages/selected-article';

const router = createBrowserRouter([
  {
    path: '/',
    element: <News />,
  },
  {
    path: '/articles/:articleId',
    element: <SelectedArticlePage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <ArticleProvider>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </ArticleProvider>
    </React.StrictMode>
  </ApolloProvider>,
);

reportWebVitals();
