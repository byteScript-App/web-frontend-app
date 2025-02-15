import { Suspense } from 'react';

import { Theme } from '@/shared/configs';
import { useI18n, useTheme } from '@/shared/hooks';
import { LanguageProps, Languages } from '@/shared/i18n';

import { AppRouter } from './routes';

export const App = () => {
	const { theme, setTheme } = useTheme();
	const { t, currentLang, changeLanguage } = useI18n();
	const handleLanguageChange = (lang: LanguageProps) => {
		void changeLanguage(lang);
	};

	return (
		<Suspense fallback=''>
			<AppRouter />

			{theme}
			<button onClick={() => setTheme(Theme.system)}>System Theme</button>
			<button onClick={() => setTheme(Theme.dark)}>Dark Theme</button>
			<button onClick={() => setTheme(Theme.light)}>Light Theme</button>

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
		</Suspense>
	);
};
