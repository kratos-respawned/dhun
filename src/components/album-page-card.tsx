"use client";
import Image from "next/image";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Icons } from "./icons";
import { useSongStore } from "@/store/song-store";
import { useEffect } from "react";
interface AlbumPageCardProps {
  name: string;
  id: string;
  primaryArtists: string;
  duration: string;
  image: {
    link: string;
  }[];
}
export const AlbumPageCard = ({
  name,
  id,
  primaryArtists,
  duration,
  image,
}: AlbumPageCardProps) => {
  const setCurrentIndex = useSongStore((state) => state.setCurrentSong);
  const setsong = useSongStore((state) => state.setPlaylist);
  const songs = useSongStore((state) => state.playlist);
  const currentIndex = useSongStore((state) => state.currentSong);
  return (
    <Card className="border pb-0 overflow-hidden flex items-center gap-x-2 sm:gap-x-5 pr-4">
      <Image
        src={image[1].link}
        width={136}
        height={136}
        className="rounded-l-lg w-20 h-20 sm:h-[136px] sm:w-[136px] aspect-square"
        alt={name}
      />

      <div className="  flex-1  ">
        <h3 className="font-cal text-base sm:text-2xl lg:text-xl xl:text-2xl line-clamp-2">
          {name.split("(")[0].slice(0, 22).replace("&#039;", "'")}
        </h3>
        <p className="text-muted-foreground text-xs sm:text-base line-clamp-1">
          {primaryArtists.slice(0, 30)}
        </p>
        <div className=" hidden sm:flex justify-between items-center">
          <p className="text-muted-foreground">
            {(Number(duration) / 60).toPrecision(2)} minutes
          </p>
          <Button
            onClick={() => {
              console.log(songs[currentIndex]?.id, id);
              if (songs.includes({ id })) {
                if (songs[songs.length - 1].id === id) return;
                setCurrentIndex(songs.findIndex((song) => song.id === id));
                return;
              }
              setsong([...songs, { id }],songs.length);
            }}
            variant="secondary"
            className=" active:scale-90 transition-transform ml-auto"
            size="icon"
          >
            <Icons.play className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <Button
        onClick={() => {
          console.log(songs[currentIndex]?.id, id);
          if (songs.includes({ id })) {
            if (songs[songs.length - 1].id === id) return;
            setCurrentIndex(songs.findIndex((song) => song.id === id));
            return;
          }
          setsong([...songs, { id }],songs.length);
        }}
        variant="secondary"
        className=" active:scale-90 transition-transform sm:hidden ml-auto"
        size="icon"
      >
        <Icons.play className="w-4 h-4" />
      </Button>
    </Card>
  );
};
