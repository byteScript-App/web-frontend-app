import { useContext } from 'react';

import { ThemeContext } from '@/app';
import { Theme } from '@/shared/utils';
import { LOCAL_PERSISTOR } from '@/shared/utils';

import { useThemeDetector } from '../useThemeDetector';
import { UseThemeResult } from './types';

export const useTheme = (): UseThemeResult => {
	const systemTheme = useThemeDetector();

	const { theme, setTheme: updateTheme } = useContext(ThemeContext);

	const setTheme = (theme: Theme) => {
		if (theme === Theme.system) {
			updateTheme(systemTheme);
			LOCAL_PERSISTOR.theme.removeFromStorage();
		} else {
			updateTheme(theme);
			LOCAL_PERSISTOR.theme.setToStorage(theme);
		}
	};

	return { theme, setTheme };
};
