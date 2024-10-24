<script lang="ts">
  import { page } from '$app/stores'
  import { app } from '$/config'
  import { HeaderMain } from '$/components/header'
  import '$/styles/app.css'

  let { children } = $props()
</script>

<svelte:head>
  <link rel="canonical" href="{app.url}{$page.url.pathname}" />
</svelte:head>

<div id="__default">
  <HeaderMain />
  {@render children()}
</div>
