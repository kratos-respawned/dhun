"use client";
import { useSongStore } from "@/store/song-store";
import { Player } from "./Player";
import useSWR from "swr";
import { fetcherByID } from "@/lib/fetcher";
import { DownloadID } from "@/typings/download";
type Payload = {
  id: string;
  title: string;
  artist: string;
  url: string;
};
export const PlayerWrapper = () => {
  const songID = useSongStore((state) => state.id);
  const {
    data,
    error,
  }: {
    data: DownloadID;
    error: any;
  } = useSWR(songID, fetcherByID, {
    revalidateOnFocus: false,
    revalidateIfStale: false,
    onSuccess: (data: DownloadID) => {
      console.log(data);
    },
    onError: (err) => {
      console.log(err);
    },
  });
  if (error) return null;
  if (!data) return null;
  const url =
        data?.data[0]?.downloadUrl[2]?.link ||
        data?.data[0]?.downloadUrl[1]?.link ||
        data?.data[0]?.downloadUrl[0]?.link;
    
  return (
    <>
        <Player url={url} key={url} />
    </>
  );
};
