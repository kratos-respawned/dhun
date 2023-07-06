export interface SearchData {
  status: string;
  message: any;
  data: Data;
}

interface Data {
  topQuery: TopQuery;
  songs: Songs;
  albums: Albums;
  artists: Artists;
  playlists: Playlists;
}

interface TopQuery {
  results: Result[];
  position: number;
}

interface Result {
  id: string;
  title: string;
  image: Image[];
  url: string;
  type: string;
  description: string;
  position: number;
}

interface Image {
  quality: string;
  link: string;
}

interface Songs {
  results: Result2[];
  position: number;
}

interface Result2 {
  id: string;
  title: string;
  image: Image2[];
  album: string;
  url: string;
  type: string;
  description: string;
  position: number;
  primaryArtists: string;
  singers: string;
  language: string;
}

interface Image2 {
  quality: string;
  link: string;
}

interface Albums {
  results: Result3[];
  position: number;
}

interface Result3 {
  id: string;
  title: string;
  image: Image3[];
  artist: string;
  url: string;
  type: string;
  description: string;
  position: number;
  year: string;
  songIds: string;
  language: string;
}

interface Image3 {
  quality: string;
  link: string;
}

interface Artists {
  results: Result4[];
  position: number;
}

interface Result4 {
  id: string;
  title: string;
  image: Image4[];
  url: string;
  type: string;
  description: string;
  position: number;
}

interface Image4 {
  quality: string;
  link: string;
}

interface Playlists {
  results: Result5[];
  position: number;
}

interface Result5 {
  id: string;
  title: string;
  image: Image5[];
  url: string;
  type: string;
  language: string;
  description: string;
  position: number;
}

interface Image5 {
  quality: string;
  link: string;
}
