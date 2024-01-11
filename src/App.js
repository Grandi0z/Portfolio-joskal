import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './root/Root';
import MainPage from './components/MainPage';
import ErrorPage from './components/ErrorPage';
import Technologies from './components/Technologies/Technologies';
import Works from './components/Works/Works';
import About from './components/About/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: '/technologies',
        element: <Technologies />,
      },
      {
        path: '/works',
        element: <Works />,
      },
      {
        path: '/about',
        element: <About />,
      },

    ],
  },
]);

const App = () => (
  <div className="container min-w-full">
    <RouterProvider router={router} />
  </div>
);

export default App;
