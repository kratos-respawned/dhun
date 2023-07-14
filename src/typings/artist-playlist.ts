export interface ArtistPlaylist {
    status: string
    message: any
    data: Data
  }
  
   interface Data {
    total: number
    lastPage: boolean
    results: Result[]
  }
  
   interface Result {
    id: string
    name: string
    year: string
    playCount: string
    language: string
    explicitContent: string
    songCount: string
    url: string
    primaryArtists: PrimaryArtist[]
    featuredArtists: any[]
    artists: Artist[]
    image: Image[]
    songs: any[]
  }
  
   interface PrimaryArtist {
    id: string
    name: string
    url: string
    image: boolean
    type: string
    role: string
  }
  
   interface Artist {
    id: string
    name: string
    url: string
    image: boolean
    type: string
    role: string
  }
  
   interface Image {
    quality: string
    link: string
  }
  