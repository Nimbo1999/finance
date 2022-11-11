import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@/contexts';

import App from '@/App';
import '@/configs/i18next.config';

const container = document.getElementById('root');
const root = createRoot(container as HTMLDivElement);

root.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>,
);
