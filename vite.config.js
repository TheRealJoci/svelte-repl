import path from 'path';
import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'@sveltejs/repl': path.resolve('src/lib')
		}
	},
	server: {
		fs: {
			strict: false
		}
	}
};

export default config;
