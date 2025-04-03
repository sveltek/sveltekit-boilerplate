import type { PageLoad } from './$types'

export const load: PageLoad = () => {
  return {
    metadata: {
      title: 'About',
      description: 'Learn more about us.',
    },
  }
}
