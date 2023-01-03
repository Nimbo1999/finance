import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
        font-family: inherit;
        letter-spacing: inherit;
        line-height: inherit;
    }

    body {
        font-family: ${({ theme }) => theme.fontFamily};
        font-weight: 400;
        letter-spacing: 1px;
        line-height: 1.375em;
        box-sizing: border-box;
        background-color: ${({ theme }) => theme.palette.background.main};
        color: ${({ theme }) => theme.palette.text.primary};
    }

    html {
        font-size: 100%;
    }

    html, body, #root {
        height: 100vh;
        width: 100vw;
    }

    small {
        color: ${({ theme }) => theme.palette.text.hint};
    }

    h1, h2, h3, h4, h5, h6 {
        color: ${({ theme }) => theme.palette.text.primary};
    }

    h1 {
        font-size: 6rem;
        line-height: 6.375rem;
        font-weight: 300;
    }

    h2 {
        font-size: 3.75rem;
        line-height: 4.125rem;
        font-weight: 300;
    }

    h3 {
        font-size: 3rem;
        line-height: 3.375rem;
        font-weight: 400;
    }

    h4 {
        font-size: 2.125rem;
        line-height: 2.5rem;
        font-weight: 400;
    }

    h5 {
        font-size: 1.5rem;
        line-height: 1.875rem;
        font-weight: 400;
    }

    h6 {
        font-size: 1.25rem;
        line-height: 1.625rem;
        font-weight: 400;
    }
`;
