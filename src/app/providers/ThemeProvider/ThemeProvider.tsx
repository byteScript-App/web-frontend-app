import { Theme, themeDataAttribute } from '@/shared/configs';
import { useThemeDetector } from '@/shared/hooks';
import { LOCAL_PERSISTOR } from '@/shared/utils';
import { FC, useEffect, useMemo, useState } from 'react';
import { ThemeContext } from './ThemeContext';
import { ThemeProviderProps } from './types';

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
	const defaultTheme = LOCAL_PERSISTOR.theme.getFromStorage();
	const systemTheme = useThemeDetector();

	const [theme, setTheme] = useState<Theme>(initialTheme ?? defaultTheme ?? systemTheme);

	const defaultProps = useMemo(
		() => ({
			theme,
			setTheme,
		}),
		[theme],
	);

	useEffect(() => {
		if (!defaultTheme) {
			setTheme(systemTheme);
		}
	}, [defaultTheme, systemTheme]);

	useEffect(() => {
		const themeValue = document.documentElement.getAttribute(themeDataAttribute);

		if (themeValue !== theme) {
			document.documentElement.setAttribute(themeDataAttribute, theme);
		}
	}, [theme]);

	return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};
