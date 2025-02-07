import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';

import { App, ErrorBoundary, StoreProvider, ThemeProvider } from '@/app';
import '@/shared/i18n';

createRoot(document.getElementById('root')!).render(
	<ErrorBoundary>
		<StoreProvider>
			<BrowserRouter>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</BrowserRouter>
		</StoreProvider>
	</ErrorBoundary>,
);
