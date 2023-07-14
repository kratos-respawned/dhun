import { AlbumCard } from "@/components/album-card";
import { gethomepageData } from "@/utils/get-home-data";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { SongCard } from "@/components/song-card";

export const Albums = async () => {
  const data = await gethomepageData();
  return (
    <section className="space-y-4 border-none">
      <div className="mt-6 space-y-1">
        <h2 className="text-3xl font-cal font-semibold tracking-wide ">
          New Releases
        </h2>
      </div>
      <Separator className="my-4" />
      <ScrollArea>
        <div className=" flex gap-4">
          {data?.data.albums.map((item) => {
            if (item.type === "song")
              return (
                <SongCard
                  aspectRatio="portrait"
                  width={250}
                  height={330}
                  key={item.id}
                  id={item.id}
                  imageURL={item.image}
                  title={item.name}
                  type={item.type}
                  url={item.url}
                  artists={item.primaryArtists}
                />
              );
            else
              return (
                <AlbumCard
                  key={item.id}
                  id={item.id}
                  imageURL={item.image}
                  title={item.name}
                  type={item.type}
                  url={item.url}
                  aspectRatio="portrait"
                  width={250}
                  height={330}
                  artists={item.artists}
                />
              );
          })}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
};
