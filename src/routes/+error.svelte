<script lang="ts">
  import { page } from '$app/state'
</script>

<svelte:head>
  <title>Error {page.status}</title>
  <meta name="description" content={page.error?.message} />
</svelte:head>

<div data-layout="error">
  <h1>{page.status}</h1>
  <h3>{page.error?.message}</h3>
</div>
