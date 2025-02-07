import { Theme } from '@/shared/configs';

export interface UseThemeResult {
	setTheme: (theme: Theme) => void;
	theme: Theme;
}
