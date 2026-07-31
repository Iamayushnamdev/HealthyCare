import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { Reveal, SectionHeading } from "./ui";
import { testimonials } from "../data/clinic";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by patients across Bhopal"
          subtitle="Real stories from real patients who trust HealthyCare Clinic with their family’s health — every single visit."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative h-full overflow-hidden rounded-3xl border border-slate-100 bg-white p-7 shadow-card dark:border-white/10 dark:bg-secondary-800"
              >
                <FaQuoteLeft className="absolute right-6 top-6 text-3xl text-primary/10 transition-colors group-hover:text-accent/20 dark:text-accent/10" />
                <div className="flex gap-1 text-amber-400">
                  {[...Array(5)].map((_, j) => (
                    <motion.span
                      key={j}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.2 + i * 0.12 + j * 0.06,
                        type: "spring",
                        stiffness: 300,
                      }}
                    >
                      <FaStar className="text-sm" />
                    </motion.span>
                  ))}
                </div>
                <p className="relative mt-5 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                  “{t.review}”
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5 dark:border-white/10">
                  <img
                    src={t.image}
                    alt={t.name}
                    loading="lazy"
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/20"
                  />
                  <div>
                    <p className="font-display text-sm font-bold text-secondary-900 dark:text-white">
                      {t.name}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {t.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
