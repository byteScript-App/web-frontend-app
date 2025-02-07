import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@/app': path.resolve(__dirname, 'src/app'),
			'@/pages': path.resolve(__dirname, 'src/pages'),
			'@/components': path.resolve(__dirname, 'src/components'),
			'@/widgets': path.resolve(__dirname, 'src/widgets'),

			'@/shared/UI': path.resolve(__dirname, 'src/shared/UI'),
			'@/shared/types': path.resolve(__dirname, 'src/shared/types'),
			'@/shared/hooks': path.resolve(__dirname, 'src/shared/hooks'),
			'@/shared/utils': path.resolve(__dirname, 'src/shared/utils'),
			'@/shared/configs': path.resolve(__dirname, 'src/shared/configs'),
			'@/shared/i18n': path.resolve(__dirname, 'src/shared/i18n'),

			'@/store': path.resolve(__dirname, 'src/store'),
		},
	},
	build: {
		target: 'ES2022',
		sourcemap: false, // disable source map on production
	},
});
