import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		/*This is needed since "custom" routes create errors.*/
		files: {
			routes: 'src/routes'
		}
	}
};

export default config;
