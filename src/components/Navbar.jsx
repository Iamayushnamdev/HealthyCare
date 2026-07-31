import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaPhoneAlt, FaMoon, FaSun } from 'react-icons/fa';
import { FiActivity } from 'react-icons/fi';
import { clinic, navLinks } from '../data/clinic';

export default function Navbar({ dark, toggleDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean);
      const pos = window.scrollY + 140;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop <= pos) {
          setActive(sections[i].id);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'border-b border-slate-200/60 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-secondary-900/80'
            : 'bg-transparent'
        }`}
      >
        <nav className="container-px flex h-20 items-center justify-between py-3">
          <button onClick={() => handleNav('home')} className="group flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent text-white shadow-glow transition-transform group-hover:scale-105">
              <FiActivity className="text-lg" />
            </span>
            <span className="font-display text-lg font-bold tracking-tight text-secondary-900 dark:text-white">
              HealthyCare
              <span className="text-primary dark:text-accent-400">.</span>
            </span>
          </button>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNav(link.id)}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active === link.id
                      ? 'text-primary dark:text-accent-400'
                      : 'text-slate-600 hover:text-secondary-900 dark:text-slate-300 dark:hover:text-white'
                  }`}
                >
                  {link.label}
                  {active === link.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-primary/10 dark:bg-accent/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleDark}
              aria-label="Toggle dark mode"
              className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white/60 text-secondary-900 transition-all hover:scale-105 hover:border-primary/40 dark:border-white/10 dark:bg-white/5 dark:text-slate-100"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={dark ? 'moon' : 'sun'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {dark ? <FaSun /> : <FaMoon />}
                </motion.span>
              </AnimatePresence>
            </button>

            <a
              href={`tel:${clinic.phone.replace(/\s/g, '')}`}
              className="hidden items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-secondary-900 transition-colors hover:text-primary dark:text-slate-100 dark:hover:text-accent-400 sm:flex"
            >
              <FaPhoneAlt className="text-xs" />
              {clinic.phoneDisplay}
            </a>

            <button
              onClick={() => handleNav('appointment')}
              className="btn-primary hidden px-5 py-2.5 text-sm sm:inline-flex"
            >
              Book Appointment
            </button>

            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Menu"
              className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white/60 text-secondary-900 dark:border-white/10 dark:bg-white/5 dark:text-white lg:hidden"
            >
              {open ? <HiX className="text-lg" /> : <HiMenuAlt3 className="text-lg" />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-b border-slate-200/60 bg-white/90 backdrop-blur-xl dark:border-white/10 dark:bg-secondary-900/90 lg:hidden"
          >
            <ul className="container-px flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNav(link.id)}
                    className={`w-full rounded-2xl px-4 py-3 text-left text-base font-medium transition-colors ${
                      active === link.id
                        ? 'bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent-400'
                        : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <button
                onClick={() => handleNav('appointment')}
                className="btn-primary mt-2 w-full px-5 py-3"
              >
                Book Appointment
              </button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
