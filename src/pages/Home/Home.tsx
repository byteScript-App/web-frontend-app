import { Icons, SpriteIcons } from '@/shared/UI';
import { useI18n, useTheme } from '@/shared/hooks';
import { LanguageProps, Languages } from '@/shared/i18n';
import { Theme } from '@/shared/utils';

const Home = () => {
	const { theme, setTheme } = useTheme();
	const { t, currentLang, changeLanguage } = useI18n();
	const handleLanguageChange = (lang: LanguageProps) => {
		void changeLanguage(lang);
	};

	return (
		<div>
			Home Page
			<br />
			<Icons.Plus color='green' />
			<br />
			<SpriteIcons.Base64Image width={64} lineHeight={64} />
			<SpriteIcons.Base64Text width={64} lineHeight={64} />
			<SpriteIcons.Certificate width={64} lineHeight={64} />
			<SpriteIcons.ColorBlind width={64} lineHeight={64} />
			<SpriteIcons.ColorPicker width={64} lineHeight={64} />
			<SpriteIcons.Cron width={64} lineHeight={64} />
			<SpriteIcons.RegexTest width={64} lineHeight={64} />
			<SpriteIcons.Gzip width={64} lineHeight={64} />
			<SpriteIcons.Hash width={64} lineHeight={64} />
			<SpriteIcons.Html width={64} lineHeight={64} />
			<SpriteIcons.ImageConvert width={64} lineHeight={64} />
			<SpriteIcons.JsonToTable width={64} lineHeight={64} />
			<br />
			<SpriteIcons.JsonFormat width={64} lineHeight={64} />
			<SpriteIcons.JsonPathTest width={64} lineHeight={64} />
			<SpriteIcons.JsonYaml width={64} lineHeight={64} />
			<SpriteIcons.JWT width={64} lineHeight={64} />
			<SpriteIcons.LoremIpsum width={64} lineHeight={64} />
			<SpriteIcons.ListCompare width={64} lineHeight={64} />
			<SpriteIcons.Markdown width={64} lineHeight={64} />
			<SpriteIcons.NumberConvert width={64} lineHeight={64} />
			<SpriteIcons.PasswordGenerate width={64} lineHeight={64} />
			<SpriteIcons.QrCode width={64} lineHeight={64} />
			<SpriteIcons.SqlFormat width={64} lineHeight={64} />
			<SpriteIcons.TextAnalyze width={64} lineHeight={64} />
			<br />
			<SpriteIcons.TextCompare width={64} lineHeight={64} />
			<SpriteIcons.TextEscape width={64} lineHeight={64} />
			<SpriteIcons.TimestampConvert width={64} lineHeight={64} />
			<SpriteIcons.Url width={64} lineHeight={64} />
			<SpriteIcons.UuidGenerate width={64} lineHeight={64} />
			<SpriteIcons.XmlCheck width={64} lineHeight={64} />
			<SpriteIcons.XmlFormat width={64} lineHeight={64} />
			<br />
			{theme}
			<button onClick={() => setTheme(Theme.system)}>System Theme</button>
			<button onClick={() => setTheme(Theme.dark)}>Dark Theme</button>
			<button onClick={() => setTheme(Theme.light)}>Light Theme</button>
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
		</div>
	);
};

export default Home;
