import {
	_SVGBase64Image,
	_SVGBase64Text,
	_SVGCertificate,
	_SVGColorBlind,
	_SVGColorPicker,
	_SVGCron,
	_SVGDateConvert,
	_SVGExpressionTester,
	_SVGExtensions,
	_SVGGzip,
	_SVGHash,
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
SpriteIcons.DateConvert = _SVGDateConvert;
SpriteIcons.ExpressionTester = _SVGExpressionTester;
SpriteIcons.Extensions = _SVGExtensions;
SpriteIcons.Gzip = _SVGGzip;
SpriteIcons.Hash = _SVGHash;
