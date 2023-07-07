import { create } from "zustand";

type Playlist = {
  id: string;
};
interface SongStore {
  currentSong: number;
  playlist: Playlist[];
  volume: number;
  setPlaylist: (playlist: Playlist[], index?: number) => void;
  setCurrentSong: (currentSong: number) => void;
  setVolume: (volume: number) => void;
}
export const useSongStore = create<SongStore>()((set) => ({
  playlist: [],
  currentSong: 0,
  volume: 0.5,
  setPlaylist: (playlist, index) => {
    if (!index) set({ playlist });
    else
      set({
        playlist,
        currentSong: index,
      });
  },
  setCurrentSong: (currentSong) => set({ currentSong }),
  setVolume: (volume) => set({ volume }),
}));
