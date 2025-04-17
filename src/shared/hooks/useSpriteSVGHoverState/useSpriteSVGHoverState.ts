import { useState } from 'react';

import { SpriteIconsProps } from '@/shared/UI';
import { SpriteIconVariant } from '@/shared/utils';

export const useSpriteSVGHoverState = (hoverable: SpriteIconsProps['hoverEffect']) => {
	const [elementState, setElementState] = useState<SpriteIconVariant>(SpriteIconVariant.DEFAULT);

	const onHover = (variant: SpriteIconVariant) => {
		if (hoverable) {
			setElementState(variant);
		}
	};

	return {
		onHover,
		elementState,
	};
};
