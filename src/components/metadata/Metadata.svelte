<script lang="ts">
  import { app } from '$/config'
  import type { MetadataOptions } from './types'

  const meta: MetadataOptions = $props()
  const { facebook: fb, twitter: tw } = meta
</script>

<svelte:head>
  {#if meta.titleTemplate}
    <title
      >{meta.titleTemplate(
        meta.title || app.name,
        meta.description || app.description,
      )}</title
    >
  {:else}
    <title
      >{meta.title || app.name} — {meta.description || app.description}</title
    >
  {/if}
  <meta name="description" content={meta.description || app.description} />
  {#if meta.applicationName}
    <meta name="application-name" content={meta.applicationName} />
  {/if}
  {#if meta.author}
    <meta name="author" content={app.author || meta.author} />
  {/if}
  {#if meta.creator}
    <meta name="creator" content={meta.creator} />
  {/if}
  {#if meta.publisher}
    <meta name="publisher" content={meta.publisher} />
  {/if}

  {#if fb}
    {#if fb.url}
      <meta property="og:url" content={fb.url} />
    {/if}
    {#if fb.title}
      <meta property="og:title" content={fb.title} />
    {/if}
    {#if fb.description}
      <meta property="og:description" content={fb.description} />
    {/if}
    {#if fb.type}
      <meta property="og:type" content={fb.type} />
    {/if}
    {#if fb.siteName}
      <meta property="og:site_name" content={fb.siteName} />
    {/if}
    {#if fb.image}
      <meta property="og:image" content={fb.image} />
    {/if}
    {#if fb.imageUrl}
      <meta property="og:image:url" content={fb.imageUrl} />
    {/if}
    {#if fb.imageType}
      <meta property="og:image:type" content={fb.imageType} />
    {/if}
    {#if fb.imageWidth}
      <meta property="og:image:width" content={fb.imageWidth} />
    {/if}
    {#if fb.imageHeight}
      <meta property="og:image:height" content={fb.imageHeight} />
    {/if}
    {#if fb.imageAlt}
      <meta property="og:image:alt" content={fb.imageAlt} />
    {/if}
  {/if}

  {#if tw}
    {#if tw.card}
      <meta name="twitter:card" content={tw.card} />
    {/if}
    {#if tw.site}
      <meta name="twitter:site" content={tw.site} />
    {/if}
    {#if tw.siteId}
      <meta name="twitter:site:id" content={tw.siteId} />
    {/if}
    {#if tw.creator}
      <meta name="twitter:creator" content={tw.creator} />
    {/if}
    {#if tw.creatorId}
      <meta name="twitter:creator:id" content={tw.creatorId} />
    {/if}
    {#if tw.description}
      <meta name="twitter:description" content={tw.description} />
    {/if}
    {#if tw.title}
      <meta name="twitter:title" content={tw.title} />
    {/if}
    {#if tw.image}
      <meta name="twitter:image" content={tw.image} />
    {/if}
    {#if tw.imageAlt}
      <meta name="twitter:image:alt" content={tw.imageAlt} />
    {/if}
  {/if}
</svelte:head>
