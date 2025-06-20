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

export type IconsMapProps = typeof IconsMap;
export type IconsLiteralProp = IconsMapProps[number];
export type IconsPrototypeProps = Record<IconsLiteralProp, FC<IconsProps>>;

// SPRITE ICONS
export interface SpriteIconsProps extends IconsBaseProps {
	hoverEffect?: boolean;
}

export type SpriteIconsMapProps = typeof SpriteIconsMap;
export type SpriteIconsLiteralProp = SpriteIconsMapProps[number];
export type SpriteIconsPrototypeProps = Record<SpriteIconsLiteralProp, FC<SpriteIconsProps>>;
