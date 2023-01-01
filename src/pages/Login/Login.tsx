import { useTranslation } from 'react-i18next';

import { useDispatch } from '@/redux';
import { helloAction } from '@/redux/slices/user';

const LoginPage: React.FC = () => {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();

    const onSelectLanguage = (language: 'pt-BR' | 'en-US') => {
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
            <p>{t('hello-word')}</p>

            <button type="button" onClick={() => onSelectLanguage('pt-BR')}>
                {t('lang.pt')}
            </button>

            <button type="button" onClick={() => onSelectLanguage('en-US')}>
                {t('lang.en')}
            </button>
        </main>
    );
};

export default LoginPage;
