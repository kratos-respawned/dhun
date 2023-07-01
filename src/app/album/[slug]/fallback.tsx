import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Skeleton } from "@/components/ui/skeleton";

export const AlbumFallback = () => {
  return (
    <section className="px-4 pt-8 sm:grid grid-cols-2 lg:grid-cols-5">
      <section className="  lg:col-span-2">
        <div className="w-full overflow-hidden rounded-lg">
          <AspectRatio ratio={1 / 1} className="bg-muted">
            <Skeleton className=" w-full h-full" />
          </AspectRatio>
        </div>
        <Skeleton className="w-full my-4 h-5 " />
        <Skeleton className="w-28 h-3" />
      </section>
    </section>
  );
};
