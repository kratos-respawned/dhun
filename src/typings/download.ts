export interface DownloadID {
  status: string
  message: any
  data: Daum[]
}

 interface Daum {
  id: string
  name: string
  type: string
  album: Album
  year: string
  releaseDate: string
  duration: string
  label: string
  primaryArtists: string
  primaryArtistsId: string
  featuredArtists: string
  featuredArtistsId: string
  explicitContent: number
  playCount: number
  language: string
  hasLyrics: string
  url: string
  copyright: string
  image: Image[]
  downloadUrl: DownloadUrl[]
}

 interface Album {
  id: string
  name: string
  url: string
}

 interface Image {
  quality: string
  link: string
}

 interface DownloadUrl {
  quality: string
  link: string
}
