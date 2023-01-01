import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import { ThemeProvider } from '@/lib/contexts';
import { store } from '@/lib/redux/store';

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
