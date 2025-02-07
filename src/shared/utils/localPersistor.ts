import { Theme } from '@/shared/configs';

import { LOCAL_STORAGE_THEME_KEY } from './constants';

export const LOCAL_PERSISTOR = {
	theme: {
		getFromStorage: () => localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme | null,
		setToStorage: (theme: Theme) => localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme),
		removeFromStorage: () => localStorage.removeItem(LOCAL_STORAGE_THEME_KEY),
	},
};
