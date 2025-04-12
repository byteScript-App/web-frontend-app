import { Theme } from '@/shared/utils';
import { PropsWithChildren } from 'react';

export interface ThemeContextProps {
	theme: Theme;
	setTheme: (theme: Theme) => void;
}

export interface ThemeProviderProps extends PropsWithChildren {
	initialTheme?: Theme;
}
