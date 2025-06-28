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
			<br />
			<Icons.Plus />
			<Icons.Hint />
			<Icons.Language />
			<Icons.Dark />
			<Icons.Light />
			<Icons.Search />
			<Icons.Copy />
			<Icons.Send />
			<Icons.Settings />
			<Icons.UploadFile />
			<Icons.Paste />
			<Icons.X />
			<Icons.Open />
			<Icons.Save />
			<Icons.Swap />
			<Icons.Arrow position='left' />
			<Icons.Arrow />
			<Icons.Horizontal />
			<Icons.Trash />
			<Icons.Scroll />
			<Icons.AddInfo />
			<Icons.Refresh />
			<Icons.Loader spin={false} />
			<Icons.Loader />
			<br />
			<br />
			<SpriteIcons.Base64Image />
			<SpriteIcons.Base64Text />
			<SpriteIcons.Certificate />
			<SpriteIcons.ColorBlind />
			<SpriteIcons.ColorPicker />
			<SpriteIcons.Cron />
			<SpriteIcons.RegexTest />
			<SpriteIcons.Gzip />
			<SpriteIcons.Hash />
			<SpriteIcons.Html />
			<SpriteIcons.ImageConvert />
			<SpriteIcons.JsonToTable />
			<br />
			<SpriteIcons.JsonFormat />
			<SpriteIcons.JsonPathTest />
			<SpriteIcons.JsonYaml />
			<SpriteIcons.JWT />
			<SpriteIcons.LoremIpsum />
			<SpriteIcons.ListCompare />
			<SpriteIcons.Markdown />
			<SpriteIcons.NumberConvert />
			<SpriteIcons.PasswordGenerate />
			<SpriteIcons.QrCode />
			<SpriteIcons.SqlFormat />
			<SpriteIcons.TextAnalyze />
			<br />
			<SpriteIcons.TextCompare />
			<SpriteIcons.TextEscape />
			<SpriteIcons.TimestampConvert />
			<SpriteIcons.Url />
			<SpriteIcons.UuidGenerate />
			<SpriteIcons.XmlCheck />
			<SpriteIcons.XmlFormat />
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
