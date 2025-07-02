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

// ICONS with specific props
export interface IconWithPositionProps extends IconsProps {
	position?: 'left' | 'right';
}
export interface IconLoaderProps extends IconsProps {
	spin?: boolean;
}
export interface IconPinRotateProps extends IconsProps {
	pinRotate?: boolean;
}

export type IconsMapProps = typeof IconsMap;
export type IconsLiteralProp = IconsMapProps[number];

type IconsSpecificProps = {
	// declare types that specific icons should/must accept different types here:
	Arrow: IconWithPositionProps; // Arrow icon accepts `position`
	Loader: IconLoaderProps; // Loader icon accepts `spin`
	PinDuotone: IconPinRotateProps; // PinDuotone accepts `pinRotate`
	PinFilled: IconPinRotateProps; // PinFilled accepts `pinRotate`
	PinOutline: IconPinRotateProps; // PinOutline accepts `pinRotate`
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
