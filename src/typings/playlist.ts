export interface Playlist {
  status: string;
  message: any;
  data: Data;
}

export interface Data {
  id: string;
  userId: string;
  name: string;
  followerCount: string;
  songCount: string;
  fanCount: string;
  username: string;
  firstname: string;
  lastname: string;
  shares: string;
  image: Image[];
  url: string;
  songs: Song[];
}

export interface Image {
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

export interface Album {
  id: string;
  name: string;
  url: string;
}

export interface Image2 {
  quality: string;
  link: string;
}

export interface DownloadUrl {
  quality: string;
  link: string;
}
