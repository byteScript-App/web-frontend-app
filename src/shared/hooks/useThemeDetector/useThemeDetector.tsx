import { useEffect, useState } from 'react';

import { convertMatchMediaToTheme, getMatchMedia, getSystemTheme } from '@/shared/utils';

import { useThemeDetectorResult } from './types';

export const useThemeDetector = (): useThemeDetectorResult => {
	const [systemTheme, setSystemTheme] = useState<useThemeDetectorResult>(getSystemTheme());

	const updateSystemTheme = (e: MediaQueryListEvent) => {
		setSystemTheme(convertMatchMediaToTheme(e.matches));
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <TODO Fix deps>
	useEffect(() => {
		const mediaQuery = getMatchMedia();
		mediaQuery.addEventListener('change', updateSystemTheme);

		return () => mediaQuery.removeEventListener('change', updateSystemTheme);
	}, []);

	return systemTheme;
};
