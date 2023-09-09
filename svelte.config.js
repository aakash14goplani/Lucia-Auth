import adapter from '@sveltejs/adapter-vercel';
import { preprocess } from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		sourceMap: true
	}),
	kit: {
		adapter: adapter(),
		alias: {
			$src: './src',
			$lib: './src/lib'
		}
	},
	compilerOptions: {
		enableSourcemap: true
	},
	vitePlugin: {
		inspector: {
			// hold and release key to toggle inspector mode
			holdMode: true,
			// show or hide the inspector option
			showToggleButton: 'always',
			// inspector position
			toggleButtonPos: 'bottom-left'
		}
	}
};

export default config;
