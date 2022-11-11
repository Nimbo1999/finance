import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import { ThemeProvider } from '@/contexts';
import { store } from '@/redux/store';
import React from 'react';

const ProviderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const router = createMemoryRouter([
        {
            path: '/',
            element: children,
        },
    ]);

    return (
        <Provider store={store}>
            <ThemeProvider>
                <RouterProvider router={router} />;
            </ThemeProvider>
        </Provider>
    );
};

export const renderWithProvider = (ui: React.ReactElement) =>
    render(ui, { wrapper: ProviderWrapper });

export * from '@testing-library/react';
