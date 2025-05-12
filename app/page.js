'use client';
import Navbar from "./components/Navbar";
import Header from "./components/header";
import About from "./components/about";
import Services from "./components/services";
import Work from "./components/work";
import Contact from "./components/contact";
import Footer from "./components/footer";
import { use, useEffect, useState } from "react";
import { useTheme } from 'next-themes';

export default function Home() {
  const [isdarkMode, setIsDarkMode] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    if (localStorage.theme === "dark" || (!(theme in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);
  useEffect(() => {
    if(isdarkMode){
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      
    }else{
        document.documentElement.classList.remove("dark");
        localStorage.theme = "";
    }
  },[isdarkMode]);
  return (
   <>
    <Navbar isdarkMode={isdarkMode} setIsDarkMode={setIsDarkMode}/>
    <Header isdarkMode={isdarkMode} />
    <About isdarkMode={isdarkMode} />
    <Services isdarkMode={isdarkMode} />
    <Work isdarkMode={isdarkMode} />
    <Contact isdarkMode={isdarkMode} />
    <Footer isdarkMode={isdarkMode} />
   </>
  );
}
