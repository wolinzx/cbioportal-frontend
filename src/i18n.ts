import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import * as enTranslations from './locales/en';
import * as zhTranslations from './locales/zh';
import * as jaTranslations from './locales/ja';
import { LOCAL_STORAGE_LANGUAGE } from './shared/components/ChangeLanguage';

const resources = {
    en: { messages: enTranslations },
    zh: { messages: zhTranslations },
    ja: { messages: jaTranslations },
};

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        react: {
            wait: true,
        },
        resources: resources,
        fallbackLng: localStorage.getItem(LOCAL_STORAGE_LANGUAGE) || 'en',
        keySeparator: '.',
        interpolation: {
            escapeValue: false,
        },
        debug: true,
        ns: ['messages'],
        defaultNS: 'messages',
        fallbackNS: [],
    });

export default i18n;
