import { useContext } from 'react';

import { ThemeContext } from '@/app';
import { STORAGE, Theme } from '@/shared/utils';

import { useThemeDetector } from '../useThemeDetector';
import { UseThemeResult } from './types';

export const useTheme = (): UseThemeResult => {
	const systemTheme = useThemeDetector();

	const { theme, setTheme: updateTheme } = useContext(ThemeContext);

	const setTheme = (theme: Theme) => {
		if (theme === Theme.system) {
			updateTheme(systemTheme);
			STORAGE.theme.clear();
		} else {
			updateTheme(theme);
			STORAGE.theme.set(theme);
		}
	};

	return { theme, setTheme };
};
