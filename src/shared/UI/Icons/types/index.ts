import { FunctionComponent } from 'react';

export type IconsNameMap =
	| 'Base64Image'
	| 'Base64Text'
	| 'Certificate'
	| 'ColorBlind'
	| 'ColorPicker'
	| 'Cron'
	| 'DateConvert';

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
