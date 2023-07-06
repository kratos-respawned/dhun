import { AlbumCard } from "@/components/album-card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { search } from "../fetcher";

export const Artist = async ({query}:{
  query: string
}) => {
  const data = await search(query);
  if(data===null) return null;
  if(data?.data.artists.results.length===0) return null;
  return (
    <section className="space-y-4 border-none">
      <div className="mt-6 space-y-1">
        <h2 className="text-3xl font-cal font-semibold tracking-wide ">
          Artist
        </h2>
      </div>
      <Separator className="my-4" />
      <ScrollArea>
        <div className=" flex gap-4">
          
          {data?.data.artists.results.sort((a,b)=>a.position-b.position).map((item) => (
            <AlbumCard
              key={item.id}
              id={item.id}
              imageURL={item.image}
              title={item.title}
              type={item.type}
              url={item.url}
              aspectRatio="portrait"
              width={250}
              height={330}
            />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
};
