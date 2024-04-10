import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../locales/en/common.json';
import es from '../locales/es/common.json';

i18n.use(initReactI18next).init({
  debug: false,
  compatibilityJSON: 'v3',
  fallbackLng: 'en-US',
  defaultNS: 'common',
  ns: ['common'],
  supportedLngs: ['en-US', 'es-MX'],
  interpolation: {
    escapeValue: false,
  },
  resources: {
    'en-US': {
      common: en,
    },
    'es-MX': {
      common: es,
    },
  },
});

export default i18n;
