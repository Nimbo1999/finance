import { render, screen } from '@/test.utils';
import HalfPageLayout from './HalfPage';

const renderElement = (component: React.ReactNode) =>
    render(
        <HalfPageLayout imgUrl="/image/login-background.jpg">{component}</HalfPageLayout>,
    );

describe('Half page layout test case', () => {
    it('Should render children correctly', () => {
        renderElement(<h1>Hey</h1>);
        const heading = screen.getByRole('heading', { name: /Hey/ });
        expect(heading).toBeInTheDocument();
    });

    it('Should receive right image prop', () => {
        renderElement(<p>Hey!</p>);
        const aside = screen.getByTestId('half-page-layout-image-side');
        expect(aside).toHaveStyle('background-image: url(/image/login-background.jpg)');
    });
});
