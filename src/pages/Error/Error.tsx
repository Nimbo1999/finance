import { useRouteError, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ErrorPage: React.FC = () => {
    const error = useRouteError();
    const { t } = useTranslation('errors');

    console.error({ error });

    return (
        <main>
            <h1>{t('error-page.title')}</h1>
            <p>{t('error-page.message')}</p>
            <Link to="/">{t('error-page.button')}</Link>
        </main>
    );
};

export default ErrorPage;
