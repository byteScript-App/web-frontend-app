import { Theme } from '@/shared/utils';

export interface UseThemeResult {
	setTheme: (theme: Theme) => void;
	theme: Theme;
}
