import { error } from '@sveltejs/kit'
import type { LayoutLoad } from './$types'

export const prerender = true

export const load: LayoutLoad = async ({ url }) => {
  if (!url.pathname) {
    error(404, {
      message: `Could not find ${url.pathname}.`,
    })
  }

  return {
    app: {
      name: 'SvelteKit Boilerplate',
      author: 'Ivo Dolenc',
      description: 'SvelteKit starter template.',
      url: 'https://sveltekit-boilerplate.dev',
    },
  }
}
