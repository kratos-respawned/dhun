import { Card } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Album } from "@/typings/homepage";
import { gethomepageData } from "@/utils/get-home-data";
import Image from "next/image";

export const Albums = async () => {
  const data = await gethomepageData();
  return (
    <section className="space-y-4 border-none">
      <div className="mt-6 space-y-1">
        <h2 className="text-3xl font-cal font-semibold tracking-wide ">New Releases</h2>
      </div>
      <Separator className="my-4" />
      <ScrollArea>
        <div className=" flex gap-4">
          {data?.data.albums.map((item) => (
            <AlbumCard key={item.id} album={item} />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
};

interface AlbumCardProps extends React.HTMLAttributes<HTMLDivElement> {
  album: Album;
  aspectRatio?: "portrait" | "square";

  width?: number;
  height?: number;
}

const AlbumCard = ({
  album,
  aspectRatio = "portrait",
  width = 330,
  height = 250,
  className,
}: AlbumCardProps) => {
  const imageUrl =
    album?.image[2]?.link ||
    album?.image[1]?.link ||
    album?.image[0]?.link ||
    "https://via.placeholder.com/150";
  return (
    <Card
      className={cn(" overflow-clip border-none rounded-none  w-[250px] mb-4", className)}
    >
      <div className="overflow-hidden rounded-md">
        <Image
          src={imageUrl}
          alt={album.name}
          quality={50}
          width={width}
          height={height}
          className={cn(
            "h-auto w-auto object-cover transition-all hover:scale-105",
            aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
          )}
        />
      </div>
      <div className="space-y-1 text-sm">
        <a href={album.url}>
          <h3 className="font-medium leading-none mt-4">
            {album.name.split("(")[0]}
          </h3>
        </a>
        <p className="text-xs text-muted-foreground">
          {album?.artists[0]?.name || "Various Artists"}
        </p>
      </div>
    </Card>
  );
};
