import { AlbumCard } from "@/components/album-card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { gethomepageData } from "@/utils/get-home-data";
export const TopCharts = async () => {
  const data = await gethomepageData();
  return (
    <section className="space-y-4 border-none">
      <div className="mt-6 space-y-1">
        <h2 className="text-3xl font-cal font-semibold tracking-wide ">
          Top Charts
        </h2>
      </div>
      <Separator className="my-4" />
      <ScrollArea>
        <div className=" flex gap-4">
          {data?.data.charts.map((chart) => (
            <AlbumCard
              key={chart.id}
              id={chart.id}
              imageURL={chart.image}
              title={chart.title}
              type={chart.type}
              url={chart.url}
              language={chart.language}
              height={200}
              width={200}
              className="w-[200px]"
            />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
};
