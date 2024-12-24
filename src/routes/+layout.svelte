<script lang="ts">
  import { page } from '$app/state'
  import { app } from '$/config'
  import { HeaderMain } from '$/components'
  import '$/styles/app.css'

  let { children } = $props()
</script>

<svelte:head>
  <link rel="canonical" href="{app.url}{page.url.pathname}" />
</svelte:head>

<div id="__default">
  <HeaderMain />
  {@render children()}
</div>
