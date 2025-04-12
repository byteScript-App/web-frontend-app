import { ReactNode } from 'react';
import { SpriteIconVariant } from '../constants';

// CLS
export type ClassNameValueProp = string | false | null | undefined | Record<PropertyKey, unknown>;

// Icons
export interface ProcessSpriteIconsProps {
	key: SpriteIconVariant;
	[SpriteIconVariant.DEFAULT]: ReactNode;
	[SpriteIconVariant.ACTIVE]: ReactNode;
}
