import {
	_SVGBase64Image,
	_SVGBase64Text,
	_SVGCertificate,
	_SVGColorBlind,
	_SVGColorPicker,
	_SVGCron,
	_SVGExtensions,
	_SVGGzip,
	_SVGHash,
	_SVGHtml,
	_SVGImageConvert,
	_SVGJWT,
	_SVGJsonFormatter,
	_SVGJsonPathTester,
	_SVGJsonToTable,
	_SVGJsonYaml,
	_SVGListComparer,
	_SVGLoremIpsum,
	_SVGMarkdown,
	_SVGNumberConverter,
	_SVGPasswordGenerator,
	_SVGPngJpegCompressor,
	_SVGRegexTester,
} from './Icons';

import { SpriteIconsPrototypeProps } from '../types';

// TODO: change text to error => TextAlert
export const SpriteIcons: SpriteIconsPrototypeProps = () => (
	<p>
		You must use structure: <b>{`<SpriteIcon.IconName/>`}</b>
	</p>
);

SpriteIcons.Base64Image = _SVGBase64Image;
SpriteIcons.Base64Text = _SVGBase64Text;
SpriteIcons.Certificate = _SVGCertificate;
SpriteIcons.ColorBlind = _SVGColorBlind;
SpriteIcons.ColorPicker = _SVGColorPicker;
SpriteIcons.Cron = _SVGCron;
SpriteIcons.RegexTester = _SVGRegexTester;
SpriteIcons.Extensions = _SVGExtensions;
SpriteIcons.Gzip = _SVGGzip;
SpriteIcons.Hash = _SVGHash;
SpriteIcons.Html = _SVGHtml;
SpriteIcons.ImageConvert = _SVGImageConvert;
SpriteIcons.JsonToTable = _SVGJsonToTable;
SpriteIcons.JsonFormatter = _SVGJsonFormatter;
SpriteIcons.JsonPathTester = _SVGJsonPathTester;
SpriteIcons.JsonYaml = _SVGJsonYaml;
SpriteIcons.JWT = _SVGJWT;
SpriteIcons.LoremIpsum = _SVGLoremIpsum;
SpriteIcons.ListComparer = _SVGListComparer;
SpriteIcons.Markdown = _SVGMarkdown;
SpriteIcons.NumberConverter = _SVGNumberConverter;
SpriteIcons.PasswordGenerator = _SVGPasswordGenerator;
SpriteIcons.PngJpegCompressor = _SVGPngJpegCompressor;
