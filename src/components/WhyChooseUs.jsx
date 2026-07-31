import { motion } from 'framer-motion';
import { Reveal, SectionHeading } from './ui';
import { whyChooseUs } from '../data/clinic';

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent dark:via-accent/5" />
      </div>
      <div className="container-px">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Healthcare designed around you"
          subtitle="We\u2019ve reimagined the clinic visit to be calm, transparent and genuinely caring — so you always leave feeling informed and looked after."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="group relative h-full overflow-hidden rounded-3xl border border-slate-100 bg-white p-7 text-center shadow-card dark:border-white/10 dark:bg-secondary-800"
                >
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-primary/10 text-primary transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-accent group-hover:text-white group-hover:shadow-glow dark:bg-accent/10 dark:text-accent-400">
                    <motion.span
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <Icon className="text-2xl" />
                    </motion.span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-secondary-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
