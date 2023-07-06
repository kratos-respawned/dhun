import { AlbumCard } from "@/components/album-card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { search } from "../fetcher";

export const Playlists =async ({query}:{
  query: string
}) =>{
  const data = await search(query);
  if(data===null) return null;
  if(data?.data.playlists.results.length===0) return null;
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
          {data?.data.playlists.results.sort((a,b)=>a.position-b.position).map((playlist) => (
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
              language={playlist.language}
            />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
};
