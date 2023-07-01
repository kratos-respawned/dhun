import { cn } from "@/lib/utils";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
      className={cn(
        "col-span-5 lg:col-span-9 max-height-screen main-layout  overflow-y-scroll px-4 pb-[100px]"
      )}
    >
      {children}
    </main>
  );
};
