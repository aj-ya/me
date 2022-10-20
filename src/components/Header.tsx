import { useState } from "react";
import MenuToggle from "./MenuToggle";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isMenuOpen, setMenuVis] = useState<boolean>(false);
  return (
    <header className="text-jet dark:text-nyanza w-full flex items-center justify-center p-5 pb-2 ">
      <div className="w-content flex flex-col">
        <div className="flex justify-between">
          <nav className="h-full gap-4 hidden items-end font-mono md:flex text-[1.3em]">
            <a href={"/"} className="hover:underline">
              home
            </a>
            <a href={"/blog"} className="hover:underline">
              blog
            </a>
            <a href={"/snippets"} className="hover:underline">
              snippets
            </a>
          </nav>
          <MenuToggle isOpen={isMenuOpen} setOpen={setMenuVis} />
          <ThemeToggle />
        </div>
        <nav
          className={`h-full gap-4 flex flex-col justify-center items-center font-mono md:hidden text-[1.3em] border-b rounded-lg ${
            isMenuOpen ? "" : "hidden"
          }`}
        >
          <a href={"/"} className="hover:underline">
            home
          </a>
          <a href={"/blog"} className="hover:underline">
            blog
          </a>
          <a href={"/snippets"} className="hover:underline">
            snippets
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
