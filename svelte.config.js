import { resolve } from 'path'
import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),

  kit: {
    adapter: adapter(),

    alias: {
      $assets: resolve('./src/assets'),
      $components: resolve('./src/components'),
      $config: resolve('./src/config')
    }
  }
}

export default config
