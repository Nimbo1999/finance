import { renderWithProvider, screen } from '@/test.utils';
import Login from './Login';

describe('Login page', () => {
    it('Should display right static content', () => {
        renderWithProvider(<Login />);

        const heading = screen.getByRole('heading', { name: /Sign in/i });
        const paragraph = screen.getByTestId('login-page-subtitle');
        const paragraph1 = screen.getByTestId('login-page-dont-have-account');
        const anchor = screen.getByRole('link', {
            name: /Create account now/i,
        });
        const emailLabel = screen.getByLabelText(/email/i);
        const passwordLabel = screen.getByLabelText(/password/i);
        const signInButton = screen.getByRole('button', { name: /sign in/i });

        expect(heading).toBeInTheDocument();
        expect(paragraph).toHaveTextContent(
            'Provide your credentions in order to access the system.',
        );
        expect(paragraph1).toHaveTextContent("Don't have a account?");
        expect(anchor).toBeInTheDocument();
        expect(emailLabel).toBeInTheDocument();
        expect(passwordLabel).toBeInTheDocument();
        expect(signInButton).toBeInTheDocument();
    });
});
