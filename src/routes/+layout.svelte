<script lang="ts">
  import { page } from '$app/state'
  import { HeaderMain } from '$/components'
  import '$/styles/app.css'

  let { children, data } = $props()
</script>

<svelte:head>
  <link rel="canonical" href="{data.app.url}{page.url.pathname}" />
</svelte:head>

<div id="__default">
  <HeaderMain />
  {@render children()}
</div>
