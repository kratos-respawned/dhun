import Image from "next/image";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";

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
  const imgURL =
    imageURL[2].link ||
    imageURL[1].link ||
    imageURL[0].link ||
    "https://via.placeholder.com/150";
  return (
    <Card
      className={cn(
        " overflow-clip border-none rounded-none w-[250px] ",
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
        <a href={url}>
          <h3 className="font-medium leading-none mt-4 line-clamp-1">
            {title.split("(")[0]}
          </h3>
        </a>
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