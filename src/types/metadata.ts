export interface Metadata {
  title?: string
  titleTemplate?: (title: string, description: string) => string
  description?: string
  applicationName?: string
  author?: string
  creator?: string
  publisher?: string
  // @see https://ogp.me/#metadata
  facebook?: {
    url?: string
    title?: string
    description?: string
    type?:
      | 'website'
      | 'article'
      | 'book'
      | 'profile'
      | 'music.song'
      | 'music.album'
      | 'music.playlist'
      | 'music.radio_status'
      | 'video.movie'
      | 'video.episode'
      | 'video.tv_show'
      | 'video.other'
    siteName?: string
    image?: string
    imageUrl?: string
    imageType?: 'image/jpeg' | 'image/gif' | 'image/png'
    imageWidth?: string
    imageHeight?: string
    imageAlt?: string
  }
  // @see https://developer.x.com/en/docs/x-for-websites/cards/overview/markup
  twitter?: {
    card?: 'summary' | 'summary_large_image' | 'app' | 'player'
    site?: string
    siteId?: string
    creator?: string
    creatorId?: string
    description?: string
    title?: string
    image?: string
    imageAlt?: string
  }
}
