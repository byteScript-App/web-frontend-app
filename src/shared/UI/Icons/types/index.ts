import { FC } from 'react';
import { IconsMap, SpriteIconsMap } from '../config';

interface IconsBaseProps {
	width?: number;
	lineHeight?: number;
	className?: string;
}

export type IconColors = 'primary' | 'red' | 'yellow' | 'green' | 'blue';

// ICONS
export interface IconsProps extends IconsBaseProps {
	color?: IconColors;
}

export interface IconsWithPositionProps extends IconsProps {
	position?: 'left' | 'right';
}

export interface IconLoaderProps extends IconsProps {
	spin?: boolean;
}

export type IconsMapProps = typeof IconsMap;
export type IconsLiteralProp = IconsMapProps[number];

type IconsSpecificProps = {
	// declare types that specific icons should/must accept different types here:
	Arrow: IconsWithPositionProps; // Arrow accepts `position`
	Loader: IconLoaderProps; // Arrow accepts `position`
};

export type IconsPrototypeProps = {
	[K in IconsLiteralProp]: K extends keyof IconsSpecificProps
		? FC<IconsSpecificProps[K]>
		: FC<IconsProps>;
};

// SPRITE ICONS
export interface SpriteIconsProps extends IconsBaseProps {
	hoverEffect?: boolean;
}

export type SpriteIconsMapProps = typeof SpriteIconsMap;
export type SpriteIconsLiteralProp = SpriteIconsMapProps[number];
export type SpriteIconsPrototypeProps = Record<SpriteIconsLiteralProp, FC<SpriteIconsProps>>;
