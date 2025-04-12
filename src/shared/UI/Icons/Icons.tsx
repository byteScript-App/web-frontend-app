import {
	_SVGBase64Image,
	_SVGBase64Text,
	_SVGCertificate,
	_SVGColorBlind,
	_SVGColorPicker,
	_SVGCron,
	_SVGDateConvert,
} from './SpriteIcons';
import { IconsPrototypeProps } from './types';

export const Icons: IconsPrototypeProps = () => <h3>You must use {`<Icon.IconName/>`}</h3>;

Icons.Base64Image = _SVGBase64Image;
Icons.Base64Text = _SVGBase64Text;
Icons.Certificate = _SVGCertificate;
Icons.ColorBlind = _SVGColorBlind;
Icons.ColorPicker = _SVGColorPicker;
Icons.Cron = _SVGCron;
Icons.DateConvert = _SVGDateConvert;
