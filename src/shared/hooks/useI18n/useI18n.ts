import { LanguageProps } from '@/shared/i18n';
import { useTranslation } from 'react-i18next';

export const useI18n = () => {
	const { t, i18n } = useTranslation();

	return {
		t,
		currentLang: i18n.language as LanguageProps,
		changeLanguage: (lng: LanguageProps) => {
			document.documentElement.lang = lng;
			return i18n.changeLanguage(lng);
		},
		ready: i18n.isInitialized,
	};
};
