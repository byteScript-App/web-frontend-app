import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	css: {
		modules: {
			generateScopedName:
				process.env.NODE_ENV === 'production'
					? '[hash:base64:8]' // Use only hashed class names in production
					: '[local]__[hash:base64:5]', // Default format for development,
		},
		preprocessorOptions: {
			scss: {
				// additionalData: `@use "sass:math";`, // Include any global SCSS configurations here
			},
		},
	},
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
		sourcemap: false,
		rollupOptions: {
			output: {
				entryFileNames: 'root/[name].js',
				chunkFileNames: chunk => {
					const moduleId = chunk.facadeModuleId
						? path.parse(chunk.facadeModuleId).name
						: chunk.name;
					// TODO: create _SVG Prefix constant as it uses it multiple places
					if (moduleId.startsWith('_SVG')) {
						return 'svgs/[name]-[hash].js';
					}
					return 'root/[name]-[hash].js';
				},
				assetFileNames: info => {
					const fileName = info.names && info.names.length > 0 && info.names[0];
					if (fileName && /\.(gif|jpe?g|png|svg|ico|webp)$/.test(fileName)) {
						return 'assets/images/[name]-[hash][extname]';
					}
					if (fileName && /\.(css)$/.test(fileName)) {
						return 'assets/css/[name]-[hash][extname]';
					}
					return 'assets/[name]-[hash][extname]';
				},
			},
		},
	},
});
