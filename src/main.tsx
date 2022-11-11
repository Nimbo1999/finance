import { createRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';

import App from '@/App';
import '@/configs/i18next.config';

const container = document.getElementById('root');
const root = createRoot(container as HTMLDivElement);

root.render(<App />);
