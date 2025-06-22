import { Suspense, lazy } from 'react';

import {
	IconsMap,
	IconsPrototypeProps,
	SpriteIconsMap,
	SpriteIconsProps,
	SpriteIconsPrototypeProps,
} from '@/shared/UI';

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
	acc[iconName as keyof IconsPrototypeProps] = props => (
		<Suspense fallback={<div>Loading...</div>}>
			<LazyIcon {...props} />
		</Suspense>
	);
	return acc;
}, {} as IconsPrototypeProps);
