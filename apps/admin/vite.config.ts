import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(({ isSsrBuild }) => ({
	build: {
		rollupOptions: isSsrBuild
			? {
					input: './server/app.ts',
				}
			: undefined,
	},
	plugins: [tailwindcss(), reactRouter(), tsconfigPaths(), react()],
	server: {
		hmr: {
			port: 24678,
		},
	},
}))
