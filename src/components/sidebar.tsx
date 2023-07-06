"use client";
import Link from "next/link";
import { Icons } from "./icons";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
export const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="hidden md:block pt-8 px-4 lg:px-6 bg-muted dark:bg-slate-900  md:col-span-2 ">
      <Link href="/" className="flex justify-start gap-1 items-center ">
        <Icons.dhun size={30} />
        <p className="text-xl font-cal pt-1 ">DHUN</p>
      </Link>
      <div className="mt-12 font-normal space-y-4">
        <h2 className="text-muted-foreground ">Menu</h2>
        <div className="space-y-2">
          <Link
            href="/"
            className={cn(
              " w-full  p-1.5 py-2  leading-[0px] rounded-md font-medium flex items-center gap-x-4 ",
              pathname === "/" && [
                "bg-white  dark:bg-orange-400 focus:ring-2 ring-0 ring-orange-400 dark:ring-white dark:text-white text-orange-400  outline-none border-none",
              ]
            )}
          >
            {" "}
            <Icons.home
              className={cn(
                "",
                pathname === "/" && ["fill-orange-400 dark:fill-white"]
              )}
            />{" "}
            <span className="">Home</span>{" "}
          </Link>

          <Link
            // href="/comingsoon"
            href="/album"
            className={cn(
              " w-full  p-1.5 py-2   leading-[0px] rounded-md font-medium flex items-center gap-x-4  ",
              // pathname === "/Categories" && [
              pathname === "/album" && [
                "bg-white dark:bg-orange-400 focus:ring-2 ring-0 ring-orange-400 dark:ring-white dark:text-white text-orange-400  outline-none border-none",
              ]
            )}
          >
            {" "}
            <Icons.apps /> <span className="">Categories</span>{" "}
          </Link>
          <Link
            href="/comingsoon"
            className={cn(
              " w-full  p-1.5 py-2   leading-[0px] rounded-md font-medium flex items-center gap-x-4  ",
              pathname === "/Saved" && [
                "bg-white dark:bg-orange-400 focus:ring-2 ring-0 ring-orange-400 dark:ring-white dark:text-white text-orange-400  outline-none border-none",
              ]
            )}
          >
            {" "}
            <Icons.save /> <span className="">Saved</span>{" "}
          </Link>
        </div>
      </div>
      <div className="mt-16 font-normal space-y-4">
        <h2 className="text-muted-foreground space-y-3 ">Playlists</h2>
        <div className="space-y-4 font-inter text-secondary-foreground text-sm ">
          <Link href="/comingsoon" className="block">
            Let's Play - Arijit Singh
          </Link>
          <Link href="/comingsoon" className="block">
            2000s Duets
          </Link>
          <Link href="/comingsoon" className="block">
            Let's Play - Kumar Sanu
          </Link>
          <Link href="/comingsoon" className="block">
            Best Of Indipop
          </Link>
        </div>
      </div>
    </aside>
  );
};
