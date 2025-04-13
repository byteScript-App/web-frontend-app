import { FunctionComponent } from 'react';

export type SpriteIconsNameMap =
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

export type SpriteIconsPrototypeProps = FunctionComponent & {
	[K in SpriteIconsNameMap]: FunctionComponent<SpriteIconsProps>;
};

interface IconsBaseProps {
	width?: number;
	lineHeight?: number;
	className?: string;
}

export interface SpriteIconsProps extends IconsBaseProps {
	hoverEffect?: boolean;
}
