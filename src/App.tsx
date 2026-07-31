import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Home from './pages/Home';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import { ScrollProgress } from './components/ui';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('hc-theme');
    const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = saved ? saved === 'dark' : prefers;
    setDark(isDark);
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('hc-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('hc-theme', 'light');
    }
  }, [dark]);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <ScrollProgress />
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>
      <Home />
      <Footer />
      <BackToTop />
    </>
  );
}
