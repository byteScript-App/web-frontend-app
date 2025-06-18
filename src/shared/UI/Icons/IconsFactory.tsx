import {
	IconsMap,
	IconsProps,
	IconsPrototypeProps,
	SpriteIconsMap,
	SpriteIconsProps,
	SpriteIconsPrototypeProps,
} from '@/shared/UI';
import { Suspense, lazy } from 'react';

export const SpriteIcons: SpriteIconsPrototypeProps = SpriteIconsMap.reduce((acc, iconName) => {
	const LazyIcon = lazy(() => import(`./SpriteIcons/_SVG${iconName}.tsx`));
	acc[iconName] = (props: SpriteIconsProps) => (
		<Suspense fallback={<div>Loading...</div>}>
			<LazyIcon {...props} />
		</Suspense>
	);
	return acc;
}, {} as SpriteIconsPrototypeProps);

export const Icons: IconsPrototypeProps = IconsMap.reduce((acc, iconName) => {
	const LazyIcon = lazy(() => import(`./Icons/_SVG${iconName}.tsx`));
	acc[iconName] = (props: IconsProps) => (
		<Suspense fallback={<div>Loading...</div>}>
			<LazyIcon {...props} />
		</Suspense>
	);
	return acc;
}, {} as IconsPrototypeProps);
