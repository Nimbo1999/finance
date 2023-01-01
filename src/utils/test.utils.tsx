import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import i18next from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import Backend from 'i18next-chained-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import { ThemeProvider } from '@/contexts';
import { store } from '@/redux/store';

const i18n = i18next.use(Backend).use(LanguageDetector).use(initReactI18next);

const ProviderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const router = createMemoryRouter([
        {
            path: '/',
            element: children,
        },
    ]);

    return (
        <I18nextProvider i18n={i18n}>
            <Provider store={store}>
                <ThemeProvider>
                    <RouterProvider router={router} />;
                </ThemeProvider>
            </Provider>
        </I18nextProvider>
    );
};

export const renderWithProvider = (ui: React.ReactElement) =>
    render(ui, { wrapper: ProviderWrapper });

export * from '@testing-library/react';
