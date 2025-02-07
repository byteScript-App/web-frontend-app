import i18n, { Resource } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import { Languages, SUPPORTED_LNGS } from './constants';
import { loadLocalTranslations, transformPromiseResultToResource } from './helper';
import { I18nResourceProps } from './types';

const resources: Resource = await Promise.all<I18nResourceProps>(
	SUPPORTED_LNGS.map(async lng => ({ lang: lng, translation: await loadLocalTranslations(lng) })),
).then(transformPromiseResultToResource);

await i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: Languages.en,
		supportedLngs: SUPPORTED_LNGS,
		resources,
		detection: {
			order: ['localStorage', 'navigator'],
			caches: ['localStorage'],
		},
		interpolation: {
			escapeValue: false,
		},
		initImmediate: false, // Load translations synchronously
	});

document.documentElement.lang = i18n.language;

export { i18n };
