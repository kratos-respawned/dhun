import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
export default function MainLoader() {
  return (
    <main>
    <section className="space-y-4 border-none">
      <div className="mt-6 space-y-1">
        <Skeleton className="w-1/4 h-9" />
      </div>
      <Separator className="my-4" />
        <div className="relative overflow-hidden">
      <div className="flex gap-x-4">
        <Skeleton className="min-w-[250px] min-h-[330px]" />
        <Skeleton className="min-w-[250px] min-h-[330px]" />
        <Skeleton className="min-w-[250px] min-h-[330px]" />
        <Skeleton className="min-w-[250px] min-h-[330px]" />
        <Skeleton className="min-w-[250px] min-h-[330px]" />
        <Skeleton className="min-w-[250px] min-h-[330px]" />
      </div>
        </div>
    </section>
    <section className="space-y-4 border-none">
      <div className="mt-6 space-y-1">
        <Skeleton className="w-1/4 h-9" />
      </div>
      <Separator className="my-4" />
        <div className="relative overflow-hidden">
      <div className="flex gap-x-4">
        <Skeleton className="min-w-[200px] min-h-[200px]" />
        <Skeleton className="min-w-[200px] min-h-[200px]" />
        <Skeleton className="min-w-[200px] min-h-[200px]" />
        <Skeleton className="min-w-[200px] min-h-[200px]" />
        <Skeleton className="min-w-[200px] min-h-[200px]" />
        <Skeleton className="min-w-[200px] min-h-[200px]" />
        <Skeleton className="min-w-[200px] min-h-[200px]" />
        
      </div>
        </div>
    </section>
    <section className="space-y-4 border-none">
      <div className="mt-6 space-y-1">
        <Skeleton className="w-1/4 h-9" />
      </div>
      <Separator className="my-4" />
        <div className="relative overflow-hidden">
      <div className="flex gap-x-4">
        <Skeleton className="min-w-[250px] min-h-[330px]" />
        <Skeleton className="min-w-[250px] min-h-[330px]" />
        <Skeleton className="min-w-[250px] min-h-[330px]" />
        <Skeleton className="min-w-[250px] min-h-[330px]" />
        <Skeleton className="min-w-[250px] min-h-[330px]" />
        <Skeleton className="min-w-[250px] min-h-[330px]" />
      </div>
        </div>
    </section>
  </main>
  );
}
