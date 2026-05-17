import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../locales/en/common.json';
import es from '../locales/es/common.json';
import it from '../locales/it/common.json';
import pt from '../locales/pt/common.json';

i18n.use(initReactI18next).init({
  debug: false,
  compatibilityJSON: 'v3',
  fallbackLng: 'en-GB',
  defaultNS: 'common',
  ns: ['common'],
  supportedLngs: ['en-GB', 'es-MX', 'it-IT', 'pt-BR'],
  interpolation: {
    escapeValue: false,
  },
  resources: {
    'en-GB': {
      common: en,
    },
    'es-MX': {
      common: es,
    },
    'it-IT': {
      common: it,
    },
    'pt-BR': {
      common: pt,
    },
  },
});

export default i18n;
