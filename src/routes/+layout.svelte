<script lang="ts">
  import { dev } from '$app/environment'
  import { page } from '$app/state'
  import { HeaderMain } from '$/components'
  import type { Metadata } from '$/types'
  import '$/styles/app.css'

  let metadata = $state<Metadata>({})

  const setMetadata = () => {
    let { title, titleTemplate, description } = page.data.metadata || {}

    metadata.title = title || 'Starter Template'
    metadata.titleTemplate =
      titleTemplate === null ? '' : titleTemplate || ' — Sveltek'
    metadata.description = description || 'SvelteKit starter template.'
    metadata.author = 'Sveltek'
    metadata.canonical = dev
      ? 'http://localhost:5173'
      : 'https://sveltekit-boilerplate.dev'
  }

  setMetadata()
  $effect(setMetadata)

  let { children } = $props()
</script>

<svelte:head>
  <title>{metadata.title! + metadata.titleTemplate!}</title>
  <meta name="description" content={metadata.description!} />
  <meta name="author" content={metadata.author!} />
  <link rel="canonical" href={metadata.canonical! + page.url.pathname} />
</svelte:head>

<div data-layout="default">
  <HeaderMain />
  {@render children()}
</div>
