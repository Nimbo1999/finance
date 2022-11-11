import { renderWithProvider, screen } from '@/utils/test.utils';
import Login from './Login';
import '@/configs/i18next.config';

describe('Login page', () => {
    it('Should display Olá mundo', () => {
        renderWithProvider(<Login />);
        const paragraph = screen.getByText('Olá mundo');
        expect(paragraph).toBeInTheDocument();
    });
});
