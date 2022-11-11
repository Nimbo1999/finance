import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
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
`;
