import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@/contexts/ThemeContext/theme';
import { GlobalStyle } from '@/contexts/ThemeContext/global-style';

const AppThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />

        {children}
    </ThemeProvider>
);

export default AppThemeProvider;
