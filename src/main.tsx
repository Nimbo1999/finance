import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { ThemeProvider } from '@/lib/contexts';
import { store } from '@/lib/redux/store';
import App from '@/App';
import '@/lib/configs/i18next.config';

const container = document.getElementById('root');
const root = createRoot(container as HTMLDivElement);

root.render(
    <Provider store={store}>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </Provider>,
);
