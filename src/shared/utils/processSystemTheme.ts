import { Theme } from '@/shared/configs';
import { IS_DARK_MATCH_MEDIA } from './constants';

export const getMatchMedia = (): MediaQueryList => {
	if (typeof window === 'undefined') {
		throw new Error('Window is not defined.');
	}

	return window.matchMedia(IS_DARK_MATCH_MEDIA);
};

export const convertMatchMediaToTheme = (isDark: boolean) => (isDark ? Theme.dark : Theme.light);

export const getSystemTheme = () => convertMatchMediaToTheme(getMatchMedia().matches);
