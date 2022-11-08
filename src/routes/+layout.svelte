<script>
  import '$assets/styles/main.css'
  import NavMain from '$components/NavMain.svelte'
</script>

<div id="layout-default">
  <NavMain />
  <slot />
</div>
