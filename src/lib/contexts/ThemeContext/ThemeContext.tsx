import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@/lib/contexts/ThemeContext/theme';
import { GlobalStyle } from '@/lib/contexts/ThemeContext/global-style';

const AppThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />

        {children}
    </ThemeProvider>
);

export default AppThemeProvider;
