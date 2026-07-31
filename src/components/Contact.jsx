import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import { Reveal, SectionHeading } from "./ui";
import { clinic } from "../data/clinic";

const items = [
  { icon: FaMapMarkerAlt, label: "Visit Us", value: clinic.address },
  {
    icon: FaPhoneAlt,
    label: "Call Us",
    value: clinic.phoneDisplay,
    href: `tel:${clinic.phone.replace(/\s/g, "")}`,
  },
  {
    icon: FaEnvelope,
    label: "Email Us",
    value: clinic.email,
    href: `mailto:${clinic.email}`,
  },
  { icon: FaClock, label: "Working Hours", value: clinic.hours },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Contact"
          title="We’re here when you need us"
          subtitle="Reach out by phone, email, or visit us in person at our Bhopal clinic. Walk-ins are welcome during working hours."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="grid h-full grid-cols-1 gap-4 sm:grid-cols-2">
              {items.map((item, i) => {
                const Icon = item.icon;
                const Wrapper = item.href ? "a" : "div";
                return (
                  <motion.div
                    key={i}
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card dark:border-white/10 dark:bg-secondary-800"
                  >
                    <Wrapper
                      {...(item.href ? { href: item.href } : {})}
                      className="block"
                    >
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent text-white shadow-glow">
                        <Icon />
                      </span>
                      <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                        {item.label}
                      </p>
                      <p className="mt-1.5 text-sm font-medium leading-relaxed text-secondary-900 dark:text-white">
                        {item.value}
                      </p>
                    </Wrapper>
                  </motion.div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="h-full min-h-[20rem] overflow-hidden rounded-3xl border border-slate-100 shadow-card dark:border-white/10">
              <iframe
                title="HealthyCare Clinic location"
                src="https://www.google.com/maps?q=MP+Nagar+Bhopal&output=embed"
                className="h-full min-h-[20rem] w-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
