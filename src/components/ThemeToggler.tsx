import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button";
import { useTheme } from './ThemeProvider';

export function ThemeToggler() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
      setTheme(theme === "light" ? "dark" : "light");
    };

  return (
    <Button variant="outline" className="border-1 border-black dark:border-white" size="icon" onClick={toggleTheme}>
        <Sun
          className={`h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all ${
            theme === "dark" ? "rotate-90 scale-0" : ""
          }`}
        />
        <Moon
          className={`absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all ${
            theme === "dark" ? "rotate-0 scale-100" : ""
          }`}
        />
        <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
