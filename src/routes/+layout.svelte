<script lang="ts">
  import { page } from '$app/state'
  import { HeaderMain } from '$/components'
  import '$/styles/app.css'

  const metadata = $derived(page.data.metadata ?? {})

  let { children, data } = $props()
</script>

<svelte:head>
  <title>{metadata.title} — {data.app.name}</title>
  <meta
    name="description"
    content={metadata.description || data.app.description}
  />
  <link rel="canonical" href="{data.app.url}{page.url.pathname}" />
</svelte:head>

<div id="__default">
  <HeaderMain />
  {@render children()}
</div>
