import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { Reveal, SectionHeading } from './ui';
import { faqs } from '../data/clinic';

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered"
          subtitle="Everything you need to know before your visit. Can\u2019t find what you\u2019re looking for? Just call us — we\u2019re happy to help."
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 0.06}>
                <div
                  className={`overflow-hidden rounded-2xl border bg-white transition-colors dark:bg-secondary-800 ${
                    isOpen
                      ? 'border-primary/30 dark:border-accent/30'
                      : 'border-slate-100 dark:border-white/10'
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                  >
                    <span className="font-display text-base font-semibold text-secondary-900 dark:text-white">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-sm ${
                        isOpen
                          ? 'bg-primary text-white dark:bg-accent'
                          : 'bg-slate-100 text-slate-500 dark:bg-white/10 dark:text-slate-300'
                      }`}
                    >
                      <FaChevronDown className="text-xs" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:px-6">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
