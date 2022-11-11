import { render, screen } from '@testing-library/react';
import App from './App';
import '@/configs/i18next.config';

describe('App Test', () => {
    it('Should display Olá mundo', () => {
        render(<App />);
        const paragraph = screen.getByText('Olá mundo');
        expect(paragraph).toBeInTheDocument();
    });
});
