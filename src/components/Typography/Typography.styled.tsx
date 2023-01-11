import styled from 'styled-components';
import { BodyProps } from './Typography.d';

export const BodyC = styled.p<BodyProps>`
    font-size: ${({ variant = 'body1' }) => (variant === 'body1' ? '1rem' : '0.875rem')};
    line-height: ${({ variant = 'body1' }) =>
        variant === 'body1' ? '1.375rem' : '1.25rem'};
    letter-spacing: inherit;
    font-weight: inherit;
    color: ${({ theme }) => theme.palette.text.primary};
`;
