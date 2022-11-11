import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import EnvironmentPlugin from 'vite-plugin-environment';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [legacy(), react(), EnvironmentPlugin('all', { prefix: 'VITE_' })],
    resolve: {
        alias: {
            // for TypeScript path alias import like : @/x/y/z
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                secure: false,
                rewrite: path => path.replace(/^\/api/, ''),
            },
        },
    },
});
