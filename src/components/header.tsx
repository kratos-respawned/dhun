import { ModeToggle } from "./change-mode";
import { Navbar } from "./navigation-bar";
import { SearchBox } from "./searchBox";

export const Header = () => {
  return (
    <header className="flex items-center justify-between pt-4 gap-x-3">
      <Navbar className="md:hidden" />
      <SearchBox className=" hidden sm:block flex-1 w-full" />
      <ModeToggle />
    </header>
  );
};
