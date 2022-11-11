import { createBrowserRouter } from 'react-router-dom';
import { LoginPage, ErrorPage, InitializingPage } from '@/pages';

export const browserRouter = createBrowserRouter([
    {
        path: '/',
        element: <InitializingPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: 'login',
        element: <LoginPage />,
    },
    {
        path: 'budget',
        element: <>Budget Page</>,
    },
]);
