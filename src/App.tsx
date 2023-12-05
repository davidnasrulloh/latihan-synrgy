import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import { BooksList, BookCreate } from './pages';
import Login from './pages/Login';
// import { theme } from './config/theme';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BooksList />,
  },

  {
    path: '/create',
    element: <BookCreate />,
  },

  {
    path: '/login',
    element: <Login />,
  },
]);
export default function App() {
  return (
    <ThemeProvider theme=''>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
