import { ModeToggle } from "./change-mode";
import { Icons } from "./icons";
import { Navbar } from "./navigation-bar";
import { SearchBox } from "./searchBox";

export const Header = () => {
  return (
    <header className="flex items-center justify-between pt-4 gap-x-3  lg:pr-0">
      <div className="  flex md:hidden justify-start gap-1 items-center ">
        <Icons.dhun size={30} />
        <p className="text-xl font-cal pt-1 ">DHUN</p>
      </div>
      <SearchBox className=" hidden sm:block flex-1 w-full" />
      <ModeToggle />
    </header>
  );
};
