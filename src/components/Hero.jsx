import { motion } from 'framer-motion';
import { FaPhoneAlt, FaCalendarCheck, FaStar } from 'react-icons/fa';
import { clinic, doctorImage } from '../data/clinic';

const floatingCards = [
  { icon: FaStar, title: '15+ Years', subtitle: 'Experience', top: '8%', side: 'left' },
  { icon: FaCalendarCheck, title: '5000+', subtitle: 'Happy Patients', top: '42%', side: 'right' },
  { icon: FaCalendarCheck, title: 'Same Day', subtitle: 'Appointments', top: '76%', side: 'left' },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* gradient backdrop */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-accent/5 to-transparent dark:from-primary/20 dark:via-secondary-800 dark:to-secondary-900" />
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl dark:bg-primary/30" />
        <div className="absolute top-20 -right-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl dark:bg-accent/20" />
        <div className="absolute inset-0 bg-grid-light opacity-40 dark:opacity-10" />
      </div>

      {/* floating shapes */}
      <motion.div
        aria-hidden
        className="absolute left-[8%] top-[30%] h-3 w-3 rounded-full bg-accent/60"
        animate={{ y: [0, -24, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="absolute right-[12%] top-[22%] h-4 w-4 rounded-full bg-primary/50"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="absolute left-[18%] bottom-[14%] h-5 w-5 rounded-2xl bg-accent/40 rotate-12"
        animate={{ y: [0, -16, 0], rotate: [12, -8, 12] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container-px grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-eyebrow"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Now accepting new patients
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-secondary-900 dark:text-white sm:text-5xl lg:text-6xl"
          >
            Your Trusted{' '}
            <span className="relative whitespace-nowrap">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Healthcare
              </span>
            </span>{' '}
            Partner
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y:0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300"
          >
            At HealthyCare Clinic, {clinic.doctor} combines 15+ years of expertise with
            compassionate, modern care — so you and your family always feel heard, healthy and at home.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <button
              onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary px-7 py-3.5 text-base"
            >
              <FaCalendarCheck /> Book Appointment
            </button>
            <a
              href={`tel:${clinic.phone.replace(/\s/g, '')}`}
              className="btn-ghost px-7 py-3.5 text-base"
            >
              <FaPhoneAlt /> Call Now
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <span
                  key={i}
                  className="grid h-9 w-9 place-items-center rounded-full border-2 border-white bg-gradient-to-br from-primary to-accent text-xs font-bold text-white dark:border-secondary-800"
                >
                  {['A', 'R', 'M', 'S'][i - 1]}
                </span>
              ))}
            </div>
            <span>
              <span className="font-semibold text-secondary-900 dark:text-white">5000+ patients</span>{' '}
              treated with care
            </span>
          </motion.div>
        </div>

        {/* Doctor image */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-primary/30 to-accent/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/40 shadow-card backdrop-blur dark:border-white/10 dark:bg-white/5">
              <img
                src={doctorImage}
                alt={clinic.doctor}
                loading="eager"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border border-white/30 bg-white/70 px-4 py-3 backdrop-blur-md dark:border-white/10 dark:bg-secondary-800/70">
                <div>
                  <p className="font-display text-sm font-bold text-secondary-900 dark:text-white">
                    {clinic.doctor}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-300">{clinic.qualification}</p>
                </div>
                <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  Available
                </span>
              </div>
            </div>
          </motion.div>

          {/* floating cards */}
          {floatingCards.map((card, i) => {
            const Icon = card.icon;
            const sideClass = card.side === 'left' ? '-left-4 sm:-left-8' : '-right-4 sm:-right-8';
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: card.side === 'left' ? -20 : 20, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 + i * 0.15 }}
                className={`absolute ${sideClass} hidden sm:block`}
                style={{ top: card.top }}
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut' }}
                  className="flex items-center gap-3 rounded-2xl border border-white/60 bg-white/80 px-4 py-3 shadow-card backdrop-blur-md dark:border-white/10 dark:bg-secondary-800/80"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-white">
                    <Icon className="text-sm" />
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold leading-tight text-secondary-900 dark:text-white">
                      {card.title}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{card.subtitle}</p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
