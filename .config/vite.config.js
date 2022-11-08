import { sveltekit } from '@sveltejs/kit/vite'
import postcssimport from 'postcss-import'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default {
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
