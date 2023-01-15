import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { browserRouter } from '@/pages';

export default function App() {
    return (
        <Suspense fallback="Loading...">
            <RouterProvider router={browserRouter} />
        </Suspense>
    );
}
