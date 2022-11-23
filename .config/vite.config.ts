import type { UserConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'
import postcssimport from 'postcss-import'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

const config: UserConfig = {
  plugins: [sveltekit()],

  css: {
    postcss: {
      plugins: [
        postcssimport(),
        tailwindcss({ config: '.config/tailwind.config.cjs' }),
        autoprefixer()
      ]
    }
  }
}

export default config
