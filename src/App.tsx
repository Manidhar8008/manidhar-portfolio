import { useEffect, useState } from "react";

import Hero from "./components/portfolio/Hero";
import Problem from "./components/portfolio/Problem";
import Roadmap from "./components/portfolio/Roadmap";
import About from "./components/portfolio/About";
import Contact from "./components/portfolio/Contact";
import PortfolioFooter from "./components/portfolio/PortfolioFooter";
import PortfolioNav from "./components/portfolio/PortfolioNav";

type ThemeMode = "light" | "dark";

const THEME_STORAGE_KEY = "manidhar-portfolio-theme";

function getInitialTheme(): ThemeMode {
  if (typeof window === "undefined") {
    return "dark";
  }

  return localStorage.getItem(THEME_STORAGE_KEY) === "light"
    ? "light"
    : "dark";
}

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-[#05070b] text-white">

      <PortfolioNav
        theme={theme}
        onToggleTheme={() =>
          setTheme((current) =>
            current === "dark" ? "light" : "dark"
          )
        }
      />

      <main>

        <Hero />

        <Problem />

        <Roadmap />

        <About />

        <Contact />

      </main>

      <PortfolioFooter />

    </div>
  );
}
