import Typography from './Typography';
import { renderWithProvider, screen } from '@/test.utils';

const { Body } = Typography;

describe('Typography component test cases', () => {
    it('Should render Body element once using Typography component without destructuring other elements', () => {
        renderWithProvider(<Typography>Hello World</Typography>);
        const body1Text = screen.getByText(/hello world/i);
        expect(body1Text).toBeInTheDocument();
        expect(body1Text).toHaveTextContent('Hello World');
    });

    it('Should render Body element with body1 variant', () => {
        renderWithProvider(<Body>Hello World</Body>);
        const body1Text = screen.getByText(/hello world/i);
        expect(body1Text).toBeInTheDocument();
        expect(body1Text).toHaveTextContent('Hello World');
        expect(body1Text).toHaveStyle('font-size: 1rem');
        expect(body1Text).toHaveStyle('line-height: 1.375rem');
    });

    it('Should render Body element with body2 variant', () => {
        renderWithProvider(<Body variant="body2">Hello World, Variant body2</Body>);
        const body2Text = screen.getByText(/hello world, variant body2/i);
        expect(body2Text).toBeInTheDocument();
        expect(body2Text).toHaveTextContent('Hello World, Variant body2');
        expect(body2Text).toHaveStyle('font-size: 0.875rem');
        expect(body2Text).toHaveStyle('line-height: 1.25rem');
    });
});
