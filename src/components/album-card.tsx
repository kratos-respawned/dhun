"use client";
import Image from "next/image";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import fetchMusic from "@/lib/apiFetcher";
interface AlbumCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageURL: {
    link: string;
  }[];
  title: string;
  height?: number;
  width?: number;
  url: string;
  id: string;
  type: string;
  songCount?: string;
  aspectRatio?: "portrait" | "square";
  language?: string;
  artists?: {
    name: string;
  }[];
}

export const AlbumCard = ({
  className,
  title,
  height,
  width,
  url,
  id,
  type,
  songCount,
  imageURL,
  aspectRatio,
  language,
  artists,
}: AlbumCardProps) => {
  const router = useRouter();
  let imgURL =
    imageURL[2].link ||
    imageURL[1].link ||
    imageURL[0].link ||
    "/playlist-placeholder.webp";
    if(imgURL==="https://www.jiosaavn.com/_i/3.0/artist-default-music.png") imgURL="/song-placeholder.webp"
  return (
    <Card
      onClick={() => {
        if (type === "playlist") router.push(`/album/${id}-playlist`);
        else if(type==="album") router.push(`/album/${id}-album`);
        else {
          // console.log(type);
          router.push(`/album/artists/${id}`)
        };
      }}
      className={cn(
        " overflow-clip border-none rounded-none w-[250px] active:scale-95 transition-transform cursor-pointer ",
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
            "h-full w-full object-cover transition-all hover:scale-105",
            aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
          )}
        />
      </div>
      <div className="space-y-1 text-sm">
        <h3 className="font-medium  mt-2 line-clamp-1">
          {title.split("(")[0].replace("&#039;", "'")}
        </h3>
        {songCount && (
          <p className="text-xs text-muted-foreground">
            {type} • {songCount} {Number(songCount) > 1 ? "Songs" : "Song"}
          </p>
        )}
        {language && (
          <p className="text-xs text-muted-foreground">
            {language || "Various Artists"}
          </p>
        )}
        {artists && (
          <p className="text-xs text-muted-foreground">
            {artists[0]?.name || "Various Artists"}
          </p>
        )}
      </div>
    </Card>
  );
};
