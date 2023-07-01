import { DownloadID } from "@/typings/download";
import { create } from "zustand";
type Song = {
  id: string;
  title: string;
  artist: string;
  url: string;
};
interface SongStore {
  song: Song;
  id: string;
  setID: (id: string) => void;
  setSong: (song: Song) => void;
}
export const useSongStore = create<SongStore>()((set) => ({
  song: {
    id: "",
    title: "",
    artist: "",
    url: "",
  },
  id: "",
  setID: (id: string) => set({ id: id }),
  setSong: ( song: Song) => set({ song: song })
}));
