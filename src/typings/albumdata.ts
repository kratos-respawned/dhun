export interface AlbumData {
  status: string;
  message: any;
  data: Data;
}

interface Data {
  id: string;
  name: string;
  year: string;
  releaseDate: string;
  songCount: string;
  url: string;
  primaryArtistsId: string;
  primaryArtists: string;
  featuredArtists: any[];
  artists: any[];
  image: Image[];
  songs: Song[];
}

interface Image {
  quality: string;
  link: string;
}

export interface Song {
  id: string;
  name: string;
  album: Album;
  year: string;
  releaseDate: string;
  duration: string;
  label: string;
  primaryArtists: string;
  primaryArtistsId: string;
  featuredArtists: string;
  featuredArtistsId: string;
  explicitContent: number;
  playCount: string;
  language: string;
  hasLyrics: string;
  url: string;
  copyright: string;
  image: Image2[];
  downloadUrl: DownloadUrl[];
}

interface Album {
  id: string;
  name: string;
  url: string;
}

interface Image2 {
  quality: string;
  link: string;
}

interface DownloadUrl {
  quality: string;
  link: string;
}
