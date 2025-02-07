import { I18nResourceProps, LanguageProps, TypedTranslationsProps } from './types';

export const loadLocalTranslations = async (lng: LanguageProps) => {
	const response = await fetch(`/locales/${lng}.json`);
	if (!response.ok) throw new Error(`Failed to load ${lng} translations`);
	return response.json();
};

export const transformPromiseResultToResource = (result: I18nResourceProps[]) => {
	return result.reduce(
		(acc, { lang, translation }) => {
			acc[lang] = { translation };
			return acc;
		},
		{} as Record<LanguageProps, { translation: TypedTranslationsProps }>,
	);
};
