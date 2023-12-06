import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

// BookDetail
import { BooksList, BookCreate, BookUpdate, BookDetail } from './pages';
import Login from './pages/Login';
// import { theme } from './config/theme';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BooksList />,
  },
  {
    path: '/detail/:id',
    element: <BookDetail />,
  },
  {
    path: '/create',
    element: <BookCreate />,
  },
  {
    path: '/update/:id',
    element: <BookUpdate />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);
export default function App() {
  return (
    <ThemeProvider theme='dark'>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
