import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';

import {
	App,
	ErrorBoundary,
	ProviderComponent,
	StoreProvider,
	ThemeProvider,
	composeProviders,
} from '@/app';
import '@/shared/i18n';

const providers: ProviderComponent[] = [
	ErrorBoundary,
	StoreProvider,
	BrowserRouter,
	ThemeProvider,
	// ... app will be wrapped from top of this array's elem, ErrorBoundary -> Store... -> ...
];

createRoot(document.getElementById('root')!).render(composeProviders(providers, <App />));
