import {
	_SVGBase64Text,
	_SVGCertificate,
	_SVGColorBlindness,
	_SVGColorPicker,
	_SVGCronExpression,
	_SvgBase64Image,
} from './SpriteIcons';
import { IconsPrototypeProps } from './types';

export const Icons: IconsPrototypeProps = () => <h3>You must use {`<Icon.IconName/>`}</h3>;

Icons.Base64Image = _SvgBase64Image;
Icons.Base64Text = _SVGBase64Text;
Icons.Certificate = _SVGCertificate;
Icons.ColorBlindness = _SVGColorBlindness;
Icons.ColorPicker = _SVGColorPicker;
Icons.CronExpression = _SVGCronExpression;
