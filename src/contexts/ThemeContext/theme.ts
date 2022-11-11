import { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
    borderRadius: '.5rem',
    fontFamily: "'Poppins', sans-serif",
    palette: {
        primary: {
            dark: '#B36D10',
            main: '#FF8717',
            light: '#FF9F45',
        },
        text: {
            primary: '#F2F2F2',
            secondary: '#F2F2F2B3',
            disabled: '#F2F2F280',
            hint: '#F2F2F299',
        },
        background: {
            dark: '#333333',
            main: '#424242',
            light: '#4F4F4F',
        },
        secondary: {
            dark: '#B28D10',
            main: '#FFCA17',
            light: '#FFD445',
        },
        error: {
            dark: '#D32F2F',
            main: '#F44336',
            light: '#E57373',
        },
        warning: {
            dark: '#B26A00',
            main: '#FF9800',
            light: '#FFAC33',
        },
        info: {
            dark: '#1769AA',
            main: '#2196F3',
            light: '#4DABF5',
        },
        success: {
            dark: '#357A38',
            main: '#4CAF50',
            light: '#6FBF73',
        },
    },
};
