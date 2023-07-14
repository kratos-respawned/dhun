export interface ArtistSongsRoot {
  status: string
  message: any
  data: ArtistSongs
}

export interface ArtistSongs {
  total: number
  lastPage: boolean
  results: Result[]
}

 interface Result {
  id: string
  name: string
  type: string
  album: Album
  year: string
  releaseDate: any
  duration: string
  label: string
  primaryArtists: string
  primaryArtistsId: string
  featuredArtists: string
  featuredArtistsId: string
  explicitContent: number
  playCount: any
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
