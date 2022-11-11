import { RouterProvider } from 'react-router-dom';
import { browserRouter } from '@/pages';

export default function App() {
    return <RouterProvider router={browserRouter} />;
}
