import { Theme } from '@/shared/utils';

import { LOCAL_STORAGE_THEME_KEY } from './constants';

const theme = {
	get: () => localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme | null,
	set: (theme: Theme) => localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme),
	clear: () => localStorage.removeItem(LOCAL_STORAGE_THEME_KEY),
};

export const STORAGE = { theme };
