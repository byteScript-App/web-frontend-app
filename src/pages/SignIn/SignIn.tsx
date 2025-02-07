import { FC } from 'react';

import { useI18n } from '@/shared/hooks';
import { LanguageProps, Languages } from '@/shared/i18n';

export const SignIn: FC = () => {
	const { t, currentLang, changeLanguage } = useI18n();

	const handleLanguageChange = (lang: LanguageProps) => {
		void changeLanguage(lang);
	};

	return (
		<div>
			Sign In
			<div>
				<h1>{t('hello')}</h1>
				<p>{t('welcome', { name: 'Sherzod' })}</p>

				<div>
					<button
						onClick={() => handleLanguageChange(Languages.en)}
						disabled={currentLang === Languages.en}
					>
						English
					</button>
					<button
						onClick={() => handleLanguageChange(Languages.ru)}
						disabled={currentLang === Languages.ru}
					>
						Русский
					</button>
				</div>
			</div>
		</div>
	);
};
