import enTranslations from '../../../../public/locales/en.json';
import { Languages } from '../constants';

declare module 'i18next' {
	interface CustomTypeOptions {
		defaultNS: 'translation';
		resources: {
			translation: typeof enTranslations;
		};
	}
}

export type LanguageProps = Languages.en | Languages.ru;
export type TypedTranslationsProps = typeof enTranslations;

export interface I18nResourceProps {
	lang: LanguageProps;
	translation: TypedTranslationsProps;
}
