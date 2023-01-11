import styled, { css } from 'styled-components';
import { ButtonProps } from './Button.d';

const defaultButtonStyle = css`
    appearance: none;
    padding: 0.625rem 1.5rem;
    font-size: 0.875rem;
    letter-spacing: 1px;
    line-height: 1.25rem;
    font-weight: 500;
    color: ${({ theme }) => theme.palette.text.primary};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 100rem;
    background-color: ${({ theme }) => theme.palette.background.light};
    border: 2px solid ${({ theme }) => theme.palette.background.light};
    cursor: pointer;
    transition: all 250ms ease-out;

    &:hover {
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        transform: translateY(-1px);
    }

    &:active {
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
        transform: translateY(2px);
        opacity: 0.9;
    }
`;

const getBackgroundColor = (color: ButtonProps['color']) =>
    color && color !== 'default'
        ? css`
              background-color: ${({ theme }) => theme.palette[color].main};
              ${() =>
                  color === 'secondary'
                      ? css`
                            color: ${({ theme }) => theme.palette.background.light};
                        `
                      : css``}
          `
        : css``;

const getVariantCss = ({ color, variant }: ButtonProps) =>
    variant && variant !== 'solid'
        ? variant === 'outline'
            ? css`
                  background-color: ${({ theme }) => theme.palette.background.main};
                  color: ${({ theme }) =>
                      color && color !== 'default'
                          ? theme.palette[color].main
                          : 'inherit'};
                  border-color: ${({ theme }) =>
                      color && color !== 'default'
                          ? theme.palette[color].main
                          : 'inherit'};
              `
            : css`
                  background-color: transparent;
                  color: ${({ theme }) =>
                      color && color !== 'default'
                          ? theme.palette[color].main
                          : 'inherit'};
                  border: none;
              `
        : css``;

export const Button = styled.button<ButtonProps>`
    ${defaultButtonStyle}
    ${({ color }) => getBackgroundColor(color)}
    ${({ variant, color }) => getVariantCss({ variant, color })}
`;
