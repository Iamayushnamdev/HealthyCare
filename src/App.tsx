import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import { ScrollProgress } from "./components/ui";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    setDark((prev) => !prev);
  };
  useEffect(() => {
    const savedTheme = localStorage.getItem("hc-theme");

    if (savedTheme) {
      setDark(savedTheme === "dark");
    } else {
      setDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("hc-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("hc-theme", "light");
    }
  }, [dark]);

  useEffect(() => {
    if (localStorage.getItem("hc-theme")) return;

    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      setDark(e.matches);
    };

    media.addEventListener("change", handleChange);

    return () => media.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <ScrollProgress />
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>
      <Home dark={dark} toggleDark={toggleDark} />
      <Footer />
      <BackToTop />
    </>
  );
}
