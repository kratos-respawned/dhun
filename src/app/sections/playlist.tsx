import { Card } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Playlist } from "@/typings/homepage";

import { gethomepageData } from "@/utils/get-home-data";
import Image from "next/image";

export const Playlists = async () => {
  const data = await gethomepageData();
  return (
    <section className="space-y-4 border-none">
      <div className="mt-6 space-y-1">
        <h2 className="text-3xl font-cal font-semibold tracking-wide ">Playlist</h2>
      </div>
      <Separator className="my-4" />
      <ScrollArea>
        <div className=" flex gap-4">
          {data?.data.playlists.map((playlist)=>(
            <PlaylistCard key={playlist.id} playlist={playlist} />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
};
interface PlaylistCardProps extends React.HTMLAttributes<HTMLDivElement> {
  playlist: Playlist;
  aspectRatio?: "portrait" | "square";

  width?: number;
  height?: number;
}

const PlaylistCard = ({
  playlist,
  aspectRatio = "square",
  width = 200,
  height = 200,
  className,
}: PlaylistCardProps) => {
  const imageUrl = playlist.image[2]?.link || playlist.image[1]?.link || playlist.image[0]?.link || "https://via.placeholder.com/150";
  return (
    <Card
      className={cn(" overflow-clip border-none rounded-none  w-[200px] ", className)}
    >
      <div className="overflow-hidden rounded-md">
        <Image
          src={imageUrl}
          alt={playlist.title}
          quality={50}
          width={width}
          height={height}
          className={cn(
            "h-auto w-auto object-cover transition-all hover:scale-105",
            aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
          )}
        />
      </div>
      <div className="space-y-1 text-sm ">
        <a href={playlist.url}>
          <h3 className="font-medium leading-none mt-4">
            {playlist.title.split("(")[0]}
          </h3>
        </a>
        <p className="text-xs text-muted-foreground">
          {playlist?.subtitle || "Various Artists"}
        </p>
      </div>
    </Card>
  );
};
