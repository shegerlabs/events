import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { reactRouterDevTools } from 'react-router-devtools'
import { defineConfig } from 'vite'
import { iconsSpritesheet } from 'vite-plugin-icons-spritesheet'
import tsconfigPaths from 'vite-tsconfig-paths'

const MODE = process.env.NODE_ENV

export default defineConfig(({ isSsrBuild }) => ({
	build: {
		target: 'es2022',
		cssCodeSplit: MODE === 'production',
		sourcemap: MODE === 'development',
		rollupOptions: isSsrBuild
			? {
					input: './server/app.ts',
				}
			: undefined,
	},
	plugins: [
		tailwindcss(),
		reactRouterDevTools(),
		reactRouter(),
		tsconfigPaths(),
		iconsSpritesheet({
			inputDir: './config/svgs',
			outputDir: './app/components/ui/icons',
			fileName: 'sprite.svg',
			withTypes: true,
			iconNameTransformer: name => name,
		}),
	],
	resolve: {
		alias: {
			'~': path.resolve(__dirname, './app'),
		},
	},
	server: {
		hmr: {
			port: 24678,
		},
	},
}))
