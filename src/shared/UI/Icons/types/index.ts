import { FunctionComponent } from 'react';
import { SpriteIconsMap } from '../config';

interface IconsBaseProps {
	width?: number;
	lineHeight?: number;
	className?: string;
}

// SPRITE ICONS
export type SpriteIconsMapProps = typeof SpriteIconsMap;
export type SpriteIconsLiteralProp = SpriteIconsMapProps[number];

export type SpriteIconsPrototypeProps = FunctionComponent & {
	[K in SpriteIconsLiteralProp]: FunctionComponent<SpriteIconsProps>;
};

export interface SpriteIconsProps extends IconsBaseProps {
	hoverEffect?: boolean;
}
