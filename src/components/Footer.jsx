import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FiActivity } from 'react-icons/fi';
import { clinic, navLinks, services } from '../data/clinic';

const socials = [
  { icon: FaFacebookF, href: '#', label: 'Facebook' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaTwitter, href: '#', label: 'Twitter' },
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  const handleNav = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative overflow-hidden bg-secondary-900 text-slate-300">
      <div className="absolute -top-24 left-1/3 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

      <div className="container-px relative py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <button onClick={() => handleNav('home')} className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent text-white shadow-glow">
                <FiActivity className="text-lg" />
              </span>
              <span className="font-display text-lg font-bold text-white">
                HealthyCare<span className="text-accent-400">.</span>
              </span>
            </button>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-400">
              Your trusted healthcare partner in Bhopal, led by {clinic.doctor}. Compassionate, modern care for the whole family.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent/10 hover:text-accent-400"
                  >
                    <Icon className="text-sm" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => handleNav(l.id)}
                    className="text-slate-400 transition-colors hover:text-accent-400"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">Services</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.title}>
                  <button
                    onClick={() => handleNav('services')}
                    className="text-left text-slate-400 transition-colors hover:text-accent-400"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">Get in Touch</h4>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-0.5 shrink-0 text-accent-400" />
                <span className="text-slate-400">{clinic.address}</span>
              </li>
              <li>
                <a href={`tel:${clinic.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-slate-400 transition-colors hover:text-accent-400">
                  <FaPhoneAlt className="shrink-0 text-accent-400" />
                  {clinic.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${clinic.email}`} className="flex items-center gap-3 text-slate-400 transition-colors hover:text-accent-400">
                  <FaEnvelope className="shrink-0 text-accent-400" />
                  {clinic.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center text-sm text-slate-500 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} HealthyCare Clinic. All rights reserved.</p>
          <p>Designed with care for healthier lives.</p>
        </div>
      </div>
    </footer>
  );
}
