import { createBrowserRouter } from 'react-router-dom';
import { LoginPage, ErrorPage } from '@/pages';

export const browserRouter = createBrowserRouter([
    {
        path: '/',
        element: <LoginPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: 'login',
        element: <>Login Page</>,
    },
]);
