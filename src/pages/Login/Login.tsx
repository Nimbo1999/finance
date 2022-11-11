import { useTranslation } from 'react-i18next';

import { useDispatch } from '@/redux';
import { helloAction } from '@/redux/slices/user';

const LoginPage: React.FC = () => {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();

    const onSelectLanguage = (language: 'pt-BR' | 'en') => {
        dispatch(
            helloAction({
                firstName: 'Matheus',
                lastName: 'Lopes',
                id: 'MOCK_ID',
                profilePicture: null,
            }),
        );
        i18n.changeLanguage(language);
    };

    return (
        <main>
            <p>{t('helloWord')}</p>

            <button type="button" onClick={() => onSelectLanguage('pt-BR')}>
                {t('lang.pt-BR')}
            </button>

            <button type="button" onClick={() => onSelectLanguage('en')}>
                {t('lang.en')}
            </button>
        </main>
    );
};

export default LoginPage;
