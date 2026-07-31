import { Reveal, Counter } from './ui';
import { stats } from '../data/clinic';

export default function Stats() {
  return (
    <section className="relative -mt-8 pb-6">
      <div className="container-px">
        <Reveal>
          <div className="grid grid-cols-2 gap-4 rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-card backdrop-blur dark:border-white/10 dark:bg-secondary-800/80 md:grid-cols-4 md:gap-6 md:p-8">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col items-center justify-center text-center md:border-r md:border-slate-100 md:last:border-none dark:md:border-white/10 ${
                  i === 1 || i === 3 ? 'border-r border-slate-100 dark:border-white/10 md:border-none' : ''
                }`}
              >
                <p className="font-display text-4xl font-extrabold tracking-tight text-secondary-900 dark:text-white md:text-5xl">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    <Counter to={s.value} suffix={s.suffix} />
                  </span>
                </p>
                <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
