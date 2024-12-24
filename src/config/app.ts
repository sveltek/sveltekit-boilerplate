import type { ConfigApp } from './types'

// NOTE!
// Use this only for `public` data that can be safely exposed to the client-side.
// Don't use `secrets` here!

export const app: ConfigApp = {
  name: 'SvelteKit Boilerplate',
  author: 'Ivo Dolenc',
  description: 'SvelteKit starter template.',
  url: 'https://sveltekit-boilerplate.dev',
}
