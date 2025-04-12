import { FunctionComponent } from 'react';

export type IconsNameMap =
	| 'Base64Image'
	| 'Base64Text'
	| 'Certificate'
	| 'ColorBlind'
	| 'ColorPicker'
	| 'Cron'
	| 'DateConvert'
	| 'ExpressionTester'
	| 'Extensions'
	| 'Gzip'
	| 'Hash';

export type IconsPrototypeProps = FunctionComponent & {
	[K in IconsNameMap]: FunctionComponent<SpriteIconsProps>;
};

interface IconsBaseProps {
	width?: number;
	lineHeight?: number;
	className?: string;
}

export interface SpriteIconsProps extends IconsBaseProps {
	hoverEffect?: boolean;
}
