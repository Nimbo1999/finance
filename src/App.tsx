import { useTranslation } from 'react-i18next';

export default function App() {
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
}
