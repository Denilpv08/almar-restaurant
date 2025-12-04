import { Button } from "@mui/material";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Comprueba el tema inicial desde localStorage o las preferencias del sistema.
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <Button
      variant="text"
      size="medium"
      onClick={toggleTheme}
      className="rounded-full border-teal-200 dark:border-teal-700 hover:bg-teal-50 dark:hover:bg-teal-900/50 bg-transparent"
      aria-label="Cambiar tema"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 text-teal-600 dark:text-teal-400" />
      ) : (
        <Sun className="h-5 w-5 text-teal-600 dark:text-teal-400" />
      )}
    </Button>
  );
};

export default ThemeToggle;
