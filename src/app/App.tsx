import { Suspense } from 'react';

import { SpriteIcons } from '@/shared/UI';
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

			<br />

			<SpriteIcons.Base64Image width={64} lineHeight={64} />
			<SpriteIcons.Base64Text width={64} lineHeight={64} />
			<SpriteIcons.Certificate width={64} lineHeight={64} />
			<SpriteIcons.ColorBlind width={64} lineHeight={64} />
			<SpriteIcons.ColorPicker width={64} lineHeight={64} />
			<SpriteIcons.Cron width={64} lineHeight={64} />
			<SpriteIcons.RegexTester width={64} lineHeight={64} />
			<SpriteIcons.Extensions width={64} lineHeight={64} />
			<SpriteIcons.Gzip width={64} lineHeight={64} />
			<SpriteIcons.Hash width={64} lineHeight={64} />
			<SpriteIcons.Html width={64} lineHeight={64} />

			<br />

			<SpriteIcons.ImageConvert width={64} lineHeight={64} />
			<SpriteIcons.JsonToTable width={64} lineHeight={64} />
			<SpriteIcons.JsonFormatter width={64} lineHeight={64} />
			<SpriteIcons.JsonPathTester width={64} lineHeight={64} />
			<SpriteIcons.JsonYaml width={64} lineHeight={64} />
			<SpriteIcons.JWT width={64} lineHeight={64} />
			<SpriteIcons.LoremIpsum width={64} lineHeight={64} />
			<SpriteIcons.ListComparer width={64} lineHeight={64} />
			<SpriteIcons.Markdown width={64} lineHeight={64} />
			<SpriteIcons.NumberConverter width={64} lineHeight={64} />
			<SpriteIcons.PasswordGenerator width={64} lineHeight={64} />
			<SpriteIcons.PngJpegCompressor width={64} lineHeight={64} />

			<br />

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
