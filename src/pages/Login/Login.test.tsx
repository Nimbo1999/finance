import { renderWithProvider, screen } from '@/utils/test.utils';
import Login from './Login';
import '@/configs/i18next.config';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

const LoginIntegrationTest = () => {
    const [changedLang, setChangedLang] = useState(false);
    const { i18n } = useTranslation();

    useEffect(() => {
        (async () => {
            await i18n.changeLanguage('pt-BR');
            setChangedLang(() => true);
        })();
    }, []);

    return changedLang ? <Login /> : null;
};

describe('Login page', () => {
    it('Should display Olá mundo', async () => {
        renderWithProvider(<LoginIntegrationTest />);
        const paragraph = await screen.findByText('Olá mundo');
        expect(paragraph).toBeInTheDocument();
    });
});
