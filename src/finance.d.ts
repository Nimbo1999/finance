import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius: string;

        palette: {
            primary: {
                dark: string;
                main: string;
                light: string;
            };
            text: {
                primary: string;
                secondary: string;
                disabled: string;
                hint: string;
            };
            background: {
                dark: string;
                main: string;
                light: string;
            };
            secondary: {
                dark: string;
                main: string;
                light: string;
            };
            error: {
                dark: string;
                main: string;
                light: string;
            };
            warning: {
                dark: string;
                main: string;
                light: string;
            };
            info: {
                dark: string;
                main: string;
                light: string;
            };
            success: {
                dark: string;
                main: string;
                light: string;
            };
        };

        fontFamily: string;
    }
}
