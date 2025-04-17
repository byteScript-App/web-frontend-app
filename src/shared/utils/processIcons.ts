import { ReactNode } from 'react';

import { SpriteIconVariant } from './constants';
import { ProcessSpriteIconsProps } from './types';

export const processSpriteIcons = ({
	key,
	defaultState,
	activeState,
}: ProcessSpriteIconsProps): ReactNode => {
	if (key === SpriteIconVariant.DEFAULT) {
		return defaultState;
	}
	if (key === SpriteIconVariant.ACTIVE) {
		return activeState;
	}
};
