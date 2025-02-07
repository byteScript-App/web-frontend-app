import { Theme } from '@/shared/configs';
import { PropsWithChildren } from 'react';

export interface ThemeContextProps {
	theme: Theme;
	setTheme: (theme: Theme) => void;
}

export interface ThemeProviderProps extends PropsWithChildren {
	initialTheme?: Theme;
}
