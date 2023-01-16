import styled, { css } from 'styled-components';

export const TextInputContainer = styled.div`
    display: inline-block;
`;

export const Input = styled.input<{ hasError?: boolean }>`
    appearance: none;
    padding: 0.5rem 0.75rem;
    background-color: ${({ theme }) => theme.palette.background.main};
    border-radius: 0.5rem;
    border: 1px solid ${({ theme }) => theme.palette.background.dark};
    width: 100%;
    color: ${({ theme }) => theme.palette.text.primary};
    font-size: 0.875rem;
    line-height: 1.25rem;
    outline: transparent solid 2px;
    outline-offset: 1px;
    transition: outline 250ms ease-out;
    ${({ hasError }) =>
        hasError
            ? css`
                  margin-bottom: 2px;
                  border: 1px solid ${({ theme }) => theme.palette.error.dark};
                  background-color: ${({ theme }) => theme.palette.error.light}80;
              `
            : undefined};

    &:focus {
        outline: ${({ theme }) => theme.palette.info.light} solid 2px;
    }
`;
