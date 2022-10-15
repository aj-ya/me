import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    console.log(mounted, isDark);
    if (mounted) {
      if (isDark && !document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
        console.log("changed to dark...");
      } else if (
        !isDark &&
        document.documentElement.classList.contains("dark")
      ) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
        console.log("changed to light...");
      }
    }
  }, [isDark, mounted]);

  //set color mode on mount
  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, [mounted]);

  //run on mount
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <button
      onClick={() => {
        setDark(!isDark);
      }}
      className={
        "border border-black border-solid aspect-square dark:border-white rounded-md p-1 w-[30px] h-[30px] grid place-items-center"
      }
    >
      <span>{isDark ? "🌞" : "🌙"}</span>
    </button>
  );
};
export default ThemeToggle;
