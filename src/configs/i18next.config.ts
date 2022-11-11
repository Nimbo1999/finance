import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import ptBRTranslation from '@/assets/i18n/pt-BR.json';
import enTranslation from '@/assets/i18n/en.json';

i18next.use(initReactI18next).init({
    resources: {
        'pt-BR': {
            translation: ptBRTranslation,
        },
        en: {
            translation: enTranslation,
        },
    },
    lng: 'pt-BR',
    fallbackLng: 'pt-BR',
    interpolation: {
        escapeValue: false,
    },
});
