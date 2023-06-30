import { AlbumCard } from "@/components/album-card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { gethomepageData } from "@/utils/get-home-data";

export const Playlists = async () => {
  const data = await gethomepageData();
  return (
    <section className="space-y-4 border-none">
      <div className="mt-6 space-y-1">
        <h2 className="text-3xl font-cal font-semibold tracking-wide ">
          Playlist
        </h2>
      </div>
      <Separator className="my-4" />
      <ScrollArea>
        <div className=" flex gap-4">
          {data?.data.playlists.map((playlist) => (
            <AlbumCard
              key={playlist.id}
              id={playlist.id}
              imageURL={playlist.image}
              title={playlist.title}
              type={playlist.type}
              url={playlist.url}
              className="w-[200px]"
              aspectRatio="square"
              width={200}
              height={200}
              songCount={playlist.songCount}
            />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
};
