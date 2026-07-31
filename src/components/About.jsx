import { motion } from 'framer-motion';
import { FaCheckCircle, FaGraduationCap, FaHeart, FaUserMd } from 'react-icons/fa';
import { Reveal, SectionHeading } from './ui';
import { clinic, doctorImage } from '../data/clinic';

const credentials = [
  { icon: FaGraduationCap, text: 'MBBS, MD (General Medicine)' },
  { icon: FaUserMd, text: '15+ years of clinical practice' },
  { icon: FaHeart, text: '5000+ patients treated with care' },
];

const missions = [
  'Personalised treatment for every patient',
  'Evidence-based, ethical medical care',
  'Compassion that puts families at ease',
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="container-px grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative order-2 lg:order-1">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-100 shadow-card dark:border-white/10">
              <img
                src={doctorImage}
                alt={clinic.doctor}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="absolute -bottom-6 -right-2 max-w-[15rem] rounded-2xl border border-slate-100 bg-white/90 p-5 shadow-card backdrop-blur dark:border-white/10 dark:bg-secondary-800/90 sm:-right-6">
              <div className="flex items-center gap-2">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                  <FaCheckCircle />
                </span>
                <p className="font-display text-sm font-bold text-secondary-900 dark:text-white">
                  Trusted Care
                </p>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                Recognised for ethical, patient-first treatment in Bhopal.
              </p>
            </div>
          </Reveal>
          <div className="absolute -left-6 -top-6 -z-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeading
            center={false}
            eyebrow="Meet Your Doctor"
            title={<>Care led by {clinic.doctor}</>}
            subtitle="With over a decade and a half of dedicated practice, Dr. Raj Sharma blends modern medicine with a warm, human touch — making every patient feel genuinely cared for."
          />

          <div className="mt-8 space-y-3">
            {credentials.map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal key={i} delay={0.1 + i * 0.08}>
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent-400">
                      <Icon />
                    </span>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-200">{c.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.35}>
            <div className="mt-8 rounded-2xl border border-primary/10 bg-primary/5 p-6 dark:border-accent/10 dark:bg-accent/5">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary dark:text-accent-400">
                Our Mission
              </p>
              <ul className="mt-3 space-y-2">
                {missions.map((m, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-200">
                    <FaCheckCircle className="mt-0.5 shrink-0 text-emerald-500" />
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
