import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'
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
		reactRouter(),
		tsconfigPaths(),
		react(),
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
			'@': path.resolve(__dirname, './app/components/ui'),
			'@/icon-name': path.resolve(__dirname, './types/icon-name.d.ts'),
		},
	},
	server: {
		hmr: {
			port: 24678,
		},
	},
}))
