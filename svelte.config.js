import { resolve } from 'path'
import adapter from '@sveltejs/adapter-static'

export default {
  kit: {
    adapter: adapter(),

    alias: {
      $assets: resolve('./src/assets'),
      $components: resolve('./src/components'),
      $config: resolve('./src/config')
    }
  }
}
