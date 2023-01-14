import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend, { ChainedBackendOptions } from 'i18next-chained-backend';
import LocalStorageBackend from 'i18next-localstorage-backend';
import HttpApi from 'i18next-http-backend';
import resourcesToBackend from 'i18next-resources-to-backend';

import { isDevelopmentMode } from '@/lib/utils/environment.utils';

import ptTranslation from '../../../public/locales/pt-BR/translation.json';
import ptErrors from '../../../public/locales/pt-BR/errors.json';
import enTranslation from '../../../public/locales/en-US/translation.json';
import enErrors from '../../../public/locales/en-US/errors.json';

const bundledResource = {
    'pt-BR': {
        translation: ptTranslation,
        errors: ptErrors,
    },
    'en-US': {
        translation: enTranslation,
        errors: enErrors,
    },
};

i18next
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init<ChainedBackendOptions>({
        debug: isDevelopmentMode,
        fallbackLng: 'pt-BR',
        interpolation: {
            escapeValue: false,
        },
        ns: ['translation', 'errors'],
        defaultNS: 'translation',
        backend: {
            backends: [
                LocalStorageBackend, // primary backend
                HttpApi, // fallback backend
                resourcesToBackend(bundledResource),
            ],
            backendOptions: [
                {
                    // prefix for stored languages
                    prefix: 'i18next_res_',
                    // expiration
                    expirationTime: 7 * 24 * 60 * 60 * 1000,
                    // language versions
                    defaultVersion: 'v0.0.3',
                    loadPath: '/locales/{{lng}}/{{ns}}.json',
                },
                {
                    /* options for secondary backend */
                    loadPath: '/locales/{{lng}}/{{ns}}.json', // http load path for my own fallback
                },
            ],
        },
    });
