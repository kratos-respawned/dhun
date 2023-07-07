"use client";
import { cn } from "@/lib/utils";
import { Card } from "./ui/card";
import Image from "next/image";
import { useSongStore } from "@/store/song-store";
interface SongProps extends React.HTMLAttributes<HTMLDivElement> {
  imageURL: {
    link: string;
  }[];
  title: string;
  height?: number;
  width?: number;
  url: string;
  id: string;
  artists?: {
    name: string;
  }[];
  type: string;
  singer?: string;
  aspectRatio?: "portrait" | "square";
}
export const SongCard = ({
  title,
  imageURL,
  className,
  height,
  width,
  url,
  id,
  artists,
  type,
  aspectRatio,
  singer

}: SongProps) => {
  const imgURL =
    imageURL[2].link ||
    imageURL[1].link ||
    imageURL[0].link ||
    "https://via.placeholder.com/150";
  const setCurrentIndex = useSongStore((state) => state.setCurrentSong);
  const setsong=useSongStore((state)=>state.setPlaylist)
  const songs=useSongStore((state)=>state.playlist)
  const currentIndex=useSongStore((state)=>state.currentSong)
  return (
    <Card
    onClick={() => {
      console.log(songs[currentIndex]?.id, id);
      if (songs.includes({ id })) {
        if (songs[songs.length - 1].id === id) return;
        setCurrentIndex(songs.findIndex((song) => song.id === id));
        return;
      }
      setsong([...songs, { id }],songs.length);
    }}
      className={cn(
        " overflow-clip border-none  rounded-none w-[250px] ",
        className
      )}
    >
      <div
        style={{
          height: `${height}px` || "250px",
          width: `${width}px` || "250px",
        }}
        className="overflow-hidden rounded-md  "
      >
        <Image
          src={imgURL}
          alt={title}
          quality={50}
          width={width || 250}
          height={height || 250}
          className={cn(
            "h-auto w-auto object-cover transition-all hover:scale-105",
            aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
          )}
        />
      </div>
      <div className="space-y-1 text-sm ">
        {/* <a href={url}> */}
        <h3 className="font-medium leading-none mt-4">{title.split("(")[0].replace("&#039;","'")}</h3>
        {/* </a> */}
        <p className="text-xs text-muted-foreground">
          {type} •{" "}
          {artists
            ?.map((artist) => artist.name)
            .join(", ")
            .slice(0, 22)
            .concat("...")}
        </p>
        {
          singer && <p className=" line-clamp-1 text-xs text-muted-foreground">
          {singer}
        </p>
        }
      </div>
    </Card>
  );
};
