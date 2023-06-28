import { Card } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Chart } from "@/typings/homepage";
import { gethomepageData } from "@/utils/get-home-data";
import Image from "next/image";

export const TopCharts = async () => {
  const data = await gethomepageData();
  return (
    <section className="space-y-4 border-none">
      <div className="mt-6 space-y-1">
        <h2 className="text-3xl font-cal font-semibold tracking-wide ">Top Charts</h2>
      </div>
      <Separator className="my-4" />
      <ScrollArea>
        <div className=" flex gap-4">
          {data?.data.charts.map((chart) => (
            <ChartCard key={chart.id} chart={chart} />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
};
interface AlbumCardProps extends React.HTMLAttributes<HTMLDivElement> {
  chart: Chart;
  aspectRatio?: "portrait" | "square";

  width?: number;
  height?: number;
}

const ChartCard = ({
  chart,
  aspectRatio = "square",
  width = 200,
  height = 200,
  className,
}: AlbumCardProps) => {
  const imageUrl =
    chart?.image[2]?.link ||
    chart?.image[1]?.link ||
    chart?.image[0]?.link ||
    "https://via.placeholder.com/150";
  return (
    <Card
      className={cn(" overflow-clip border-none rounded-none  w-[200px] mb-4", className)}
    >
      <div className="overflow-hidden rounded-md">
        <Image
          src={imageUrl}
          alt={chart.title}
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
        <a href={chart.url}>
          <h3 className="font-medium leading-none mt-4">
            {chart.title.split("(")[0]}
          </h3>
        </a>
        <p className="text-xs text-muted-foreground">
          {chart?.language || "Various Artists"}
        </p>
      </div>
    </Card>
  );
};
