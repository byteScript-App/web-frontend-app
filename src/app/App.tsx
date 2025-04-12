import { Suspense } from 'react';

import { Icons } from '@/shared/UI';
import { useI18n, useTheme } from '@/shared/hooks';
import { LanguageProps, Languages } from '@/shared/i18n';
import { Theme } from '@/shared/utils';
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

			<Icons.Base64Image width={64} lineHeight={64} hoverEffect={true} />
			<Icons.Base64Text width={64} lineHeight={64} hoverEffect={true} />
			<Icons.Certificate width={64} lineHeight={64} hoverEffect={true} />
			<Icons.ColorBlind width={64} lineHeight={64} hoverEffect={true} />
			<Icons.ColorPicker width={64} lineHeight={64} hoverEffect={true} />
			<Icons.Cron width={64} lineHeight={64} hoverEffect={true} />
			<Icons.DateConvert width={64} lineHeight={64} hoverEffect={true} />
			<Icons.ExpressionTester width={64} lineHeight={64} hoverEffect={true} />
			<Icons.Extensions width={64} lineHeight={64} hoverEffect={true} />
			<Icons.Gzip width={64} lineHeight={64} hoverEffect={true} />
			<Icons.Hash width={64} lineHeight={64} hoverEffect={true} />

			<div className='container'>
				<h1>{t('hello')}</h1>
				<h2>{t('hello')}</h2>
				<h3>{t('hello')}</h3>
				<h4>{t('hello')}</h4>
				<h5>{t('hello')}</h5>
				<p>{t('hello')}</p>
				<span>{t('hello')}</span>
				<br />
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
