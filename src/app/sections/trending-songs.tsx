import { Card } from "@/components/ui/card";
import { PageHeader, PageHeaderHeading } from "@/components/ui/page-components";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Album3 as Album, Song } from "@/typings/homepage";
import { gethomepageData } from "@/utils/get-home-data";
import Image from "next/image";

export const TrendingSongs = async () => {
  const data = await gethomepageData();
  let list: (Song | Album)[] = [];
  if (data?.data.trending.songs) {
    list = [...data?.data.trending.songs];
  }
  if (data?.data.trending.albums) {
    list = [...list, ...data?.data.trending.albums];
  }
  
  list.sort(() => Math.random() - 0.5);
  return (
    <section className="space-y-4 border-none">
      <div className="mt-6 space-y-1">
        <h2 className="text-3xl font-cal font-semibold tracking-wide ">Trending</h2>
      </div>
      <Separator className="my-4" />
      <ScrollArea>
        <div className=" flex gap-4  ">
          {list.map((item) => {
            if (item.type === "song") {
              return <TrendingSongCard key={item.id} song={item as Song} />;
            } else {
              return <TrendingAlbumCard key={item.id} album={item as Album} />;
            }
          })}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
};
const TrendingSongCard = ({ song }: { song: Song }) => {
  return (
    <Card
      key={song.id}
      className={cn(
        " overflow-clip border-none  rounded-none w-[250px] "
      )}
    >
      <div className="overflow-hidden rounded-md">
        <Image
          src={song.image[2].link}
          alt={song.name}
          quality={50}
          width={250}
          height={250}
          className={cn(
            "h-auto w-auto object-cover transition-all hover:scale-105",
            "aspect-square"
          )}
        />
      </div>
      <div className="space-y-1 text-sm ">
        <a href={song.url}>
          <h3 className="font-medium leading-none mt-4">
            {song.name.split("(")[0]}
          </h3>
        </a>
        <p className="text-xs text-muted-foreground">
          {song.type} • {song.primaryArtists.map((artist) => artist.name).join(", ").slice(0, 22).concat("...")}
        </p>
      </div>
    </Card>
  );
};
const TrendingAlbumCard = ({ album }: { album: Album }) => {
  
  
  
  return (
    <Card
      className={cn(
        " overflow-clip border-none rounded-none w-[250px] "
      )}
    >
      <div className="overflow-hidden rounded-md  ">
        <Image
          src={album.image[2].link}
          alt={album.name}
          quality={50}
          width={250}
          height={250}
          className={cn(
            "h-auto w-auto object-cover transition-all hover:scale-105",
            "aspect-square"
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
        {album.type} • {album.songCount} {Number(album.songCount) > 1 ? "Songs" : "Song"}
        </p>
      </div>
    </Card>
  );
};
