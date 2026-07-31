import { useEffect, useRef, useState } from 'react';
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
} from 'framer-motion';

export function Reveal({ children, delay = 0, y = 28, className = '', once = true }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: '-80px 0px -80px 0px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Counter({ to, suffix = '', duration = 2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: duration * 1000, bounce: 0 });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, to, mv]);

  useEffect(() => {
    return spring.on('change', (v) => {
      setDisplay(Math.round(v).toLocaleString('en-IN'));
    });
  }, [spring]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-gradient-to-r from-primary via-accent to-primary"
    />
  );
}

export function SectionHeading({ eyebrow, title, subtitle, center = true, light = false }) {
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && <Reveal><span className="section-eyebrow">{eyebrow}</span></Reveal>}
      <Reveal delay={0.05}>
        <h2
          className={`mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-[2.6rem] md:leading-[1.1] ${
            light ? 'text-white' : 'text-secondary-900 dark:text-white'
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p
            className={`mt-4 text-base leading-relaxed sm:text-lg ${
              light ? 'text-slate-300' : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
