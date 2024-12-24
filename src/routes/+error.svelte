<script lang="ts">
  import { page } from '$app/state'
  import { Metadata } from '$/components'
</script>

<Metadata title={`Error ${page.status}`} description={page.error?.message} />

<div id="__error">
  <h1>{page.status}</h1>
  <h3>{page.error?.message}</h3>
</div>
