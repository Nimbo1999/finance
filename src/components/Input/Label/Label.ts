import styled, { css } from 'styled-components';
import { LabelProps } from '../Input';

const getLabelColor = (hasError?: boolean) =>
    hasError
        ? css`
              color: ${({ theme }) => theme.palette.error.main};
          `
        : css`
              color: ${({ theme }) => theme.palette.text.primary};
          `;

const Label = styled.label<LabelProps>`
    display: block;
    font-size: 1rem;
    margin-bottom: 0.375rem;
    ${({ hasError }) => getLabelColor(hasError)}

    &::before {
        color: ${({ theme }) => theme.palette.error.main};
        font-size: 1rem;
        user-select: none;
        letter-spacing: 0.5rem;
        content: '*';
        display: ${({ required }) => (required ? 'inline' : 'none')};
    }

    &::after {
        color: inherit;
        font-size: 1rem;
        user-select: none;
        content: ':';
        display: ${({ colon }) => (colon ? 'inline' : 'none')};
    }
`;

export default Label;
