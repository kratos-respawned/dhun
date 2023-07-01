// TODO : implement albums and playlist features
//  FIXME: check for memory leaks
import { AlbumCard } from "@/components/album-card";
import { SongCard } from "@/components/song-card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Album3 as Album, Song } from "@/typings/homepage";
import { gethomepageData } from "@/utils/get-home-data";

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
        <h2 className="text-3xl font-cal font-semibold tracking-wide ">
          Trending
        </h2>
      </div>
      <Separator className="my-4" />
      <ScrollArea>
        <div className=" flex gap-4  ">
          {list.map((item) => {
            if (item.type === "song") {
              return (
                <SongCard
                  key={item.id}
                  id={item.id}
                  imageURL={item.image}
                  title={item.name}
                  type={item.type}
                  url={item.url}
                  artists={item.primaryArtists}
                />
              );
            } else if (item.type === "album") {
              return (
                <AlbumCard
                  key={item.id}
                  id={item.id}
                  imageURL={item.image}
                  title={item.name}
                  type={item.type}
                  url={item.url}
                  songCount={(item as Album).songCount}
                />
              );
            }
          })}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
};
