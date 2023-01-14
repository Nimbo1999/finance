import { renderWithProvider, screen } from '@/test.utils';
import userEvent from '@testing-library/user-event';
import HalfPageLayout from './HalfPage';

const renderElement = (component: React.ReactNode) =>
    renderWithProvider(
        <HalfPageLayout imgUrl="/image/login-background.jpg">{component}</HalfPageLayout>,
    );

describe('Half page layout test case', () => {
    it('Should render children correctly', async () => {
        renderElement(<h1>Hey</h1>);
        const heading = await screen.findByRole('heading', { name: /Hey/ });
        expect(heading).toBeInTheDocument();
    });

    it('Should receive right image prop', () => {
        renderElement(<p>Hey!</p>);
        const aside = screen.getByTestId('half-page-layout-image-side');
        expect(aside).toHaveStyle('background-image: url(/image/login-background.jpg)');
    });

    it('Should have a translation button', async () => {
        renderElement(<></>);
        const translationButton = await screen.findByRole('button', {
            name: /Language/i,
        });
        expect(translationButton).toBeInTheDocument();
    });

    it('Should start with the en-US translations', async () => {
        renderElement(<></>);
        const translationButton = await screen.findByRole('button', {
            name: /Language/i,
        });
        // If Finds element with "Language" text means that texts are written in en-US, otherwise
        // it is written in pt-BR.
        expect(translationButton).toBeInTheDocument();
    });

    it('Should allow users to switch the language of the page', async () => {
        renderElement(<></>);
        const translationButton = screen.getByRole('button', { name: /Language/i });
        userEvent.click(translationButton);
        const portugueseOption = await screen.findByText('Portuguese');
        userEvent.click(portugueseOption);
        const updatedTranslationButton = await screen.findByRole('button', {
            name: /Linguagem/,
        });
        expect(updatedTranslationButton).toBeInTheDocument();
    });
});
