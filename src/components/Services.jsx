import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { Reveal, SectionHeading } from './ui';
import { services, clinic } from '../data/clinic';

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Our Services"
          title="Comprehensive care, under one roof"
          subtitle="From routine checkups to chronic disease management, every service at HealthyCare Clinic is delivered with precision, warmth and your long-term wellbeing in mind."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="group relative h-full overflow-hidden rounded-3xl border border-slate-100 bg-white p-7 shadow-card dark:border-white/10 dark:bg-secondary-800"
                >
                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent text-white shadow-glow transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="text-xl" />
                  </span>
                  <h3 className="relative mt-5 font-display text-xl font-bold text-secondary-900 dark:text-white">
                    {s.title}
                  </h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {s.description}
                  </p>
                  <button
                    onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}
                    className="relative mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all group-hover:gap-3 dark:text-accent-400"
                  >
                    Learn more <FaArrowRight className="text-xs" />
                  </button>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-3xl border border-primary/10 bg-gradient-to-r from-primary/5 to-accent/5 p-7 text-center sm:flex-row sm:text-left dark:border-accent/10">
            <div>
              <p className="font-display text-lg font-bold text-secondary-900 dark:text-white">
                Not sure which service you need?
              </p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                Book a consultation and {clinic.doctor} will guide you personally.
              </p>
            </div>
            <button
              onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary shrink-0 px-6 py-3 text-sm"
            >
              Book a Consultation
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
