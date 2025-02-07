import { Suspense } from 'react';

import { Theme } from '@/shared/configs';
import { useTheme } from '@/shared/hooks';

import { AppRouter } from './routes';

export const App = () => {
	const { theme, setTheme } = useTheme();

	return (
		<Suspense fallback=''>
			<AppRouter />

			{theme}
			<button onClick={() => setTheme(Theme.system)}>System Theme</button>
			<button onClick={() => setTheme(Theme.dark)}>Dark Theme</button>
			<button onClick={() => setTheme(Theme.light)}>Light Theme</button>
		</Suspense>
	);
};
