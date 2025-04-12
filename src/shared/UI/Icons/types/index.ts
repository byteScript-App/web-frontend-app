import { FunctionComponent } from 'react';

export interface IconsPrototypeProps {
	Base64Image: FunctionComponent<SpriteIconsProps>;
	Base64Text: FunctionComponent<SpriteIconsProps>;
	Certificate: FunctionComponent<SpriteIconsProps>;
	ColorBlindness: FunctionComponent<SpriteIconsProps>;
	ColorPicker: FunctionComponent<SpriteIconsProps>;
	CronExpression: FunctionComponent<SpriteIconsProps>;
}

interface IconsBaseProps {
	width?: number;
	lineHeight?: number;
	className?: string;
}

export interface SpriteIconsProps extends IconsBaseProps {
	hoverEffect?: boolean;
}
