import { FunctionComponent } from 'react';
import { SpriteIconsMap } from '../config';

export type SpriteIconsMapProps = typeof SpriteIconsMap;
export type SpriteIconsLiteralProp = SpriteIconsMapProps[number];

export type SpriteIconsPrototypeProps = FunctionComponent & {
	[K in SpriteIconsLiteralProp]: FunctionComponent<SpriteIconsProps>;
};

interface IconsBaseProps {
	width?: number;
	lineHeight?: number;
	className?: string;
}

export interface SpriteIconsProps extends IconsBaseProps {
	hoverEffect?: boolean;
}
