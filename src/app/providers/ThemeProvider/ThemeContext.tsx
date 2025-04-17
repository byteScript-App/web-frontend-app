import { Theme } from '@/shared/utils';
import { createContext } from 'react';
import { ThemeContextProps } from './types';

export const ThemeContext = createContext<ThemeContextProps>({
	theme: Theme.system,
	// biome-ignore lint/suspicious/noEmptyBlockStatements: <We set a default empty function for setTheme>
	setTheme: () => {},
});
