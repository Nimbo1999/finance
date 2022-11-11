import { useTranslation } from 'react-i18next';

const LoginPage: React.FC = () => {
    const { t, i18n } = useTranslation();

    return (
        <main>
            <p>{t('helloWord')}</p>

            <button type="button" onClick={() => i18n.changeLanguage('pt-BR')}>
                {t('lang.pt-BR')}
            </button>

            <button type="button" onClick={() => i18n.changeLanguage('en')}>
                {t('lang.en')}
            </button>
        </main>
    );
};

export default LoginPage;
