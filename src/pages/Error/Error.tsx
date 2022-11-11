import { useRouteError, Link } from 'react-router-dom';

const ErrorPage: React.FC = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <main>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <Link to="/">Home Page</Link>
        </main>
    );
};

export default ErrorPage;
