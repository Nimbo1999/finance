import styled, { css } from 'styled-components';
import {
    TypographyBodyProps,
    TypographyCaptionProps,
    TypographyColor,
} from './Typography.d';

const getTypographyColor = (color?: TypographyColor) =>
    color && color !== 'default'
        ? css`
              color: ${({ theme }) => theme.palette[color].main};
          `
        : css`
              color: ${({ theme }) => theme.palette.text.primary};
          `;

export const BodyC = styled.p<TypographyBodyProps>`
    font-size: ${({ variant = 'body1' }) => (variant === 'body1' ? '1rem' : '0.875rem')};
    line-height: ${({ variant = 'body1' }) =>
        variant === 'body1' ? '1.375rem' : '1.25rem'};
    letter-spacing: inherit;
    font-weight: inherit;
    ${({ color }) => getTypographyColor(color)}
`;

export const CaptionC = styled.small<TypographyCaptionProps>`
    font-size: 0.75rem;
    line-height: 1.125rem;
    letter-spacing: inherit;
    font-weight: 400;
    ${({ color }) => getTypographyColor(color)}
`;
