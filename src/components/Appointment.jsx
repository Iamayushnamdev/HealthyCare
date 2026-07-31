import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUser,
  FaPhone,
  FaCalendarAlt,
  FaCommentDots,
  FaCheckCircle,
} from "react-icons/fa";
import { Reveal, SectionHeading } from "./ui";
import { clinic } from "../data/clinic";
import { FaPhoneAlt } from "react-icons/fa";

const inputBase =
  "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 pl-11 text-sm text-secondary-900 placeholder-slate-400 transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 dark:border-white/10 dark:bg-secondary-800 dark:text-white dark:placeholder-slate-500";

export default function Appointment() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", phone: "", date: "", message: "" });
    }, 4500);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <section
      id="appointment"
      className="relative overflow-hidden py-20 sm:py-28"
    >
      <div className="container-px">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-primary/10 bg-gradient-to-br from-primary to-accent p-8 shadow-card sm:p-12 lg:p-16">
          <div className="absolute inset-0 bg-grid-light opacity-10" />
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
                Book Appointment
              </span>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
                Schedule your visit with {clinic.doctor}
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-white/80">
                Share a few details and our front desk will confirm your
                appointment within working hours. Same-day slots are often
                available.
              </p>

              <div className="mt-8 space-y-3 text-sm text-white/90">
                <p className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/15 backdrop-blur">
                    <FaPhoneAlt className="text-xs" />
                  </span>
                  {clinic.phoneDisplay}
                </p>
                <p className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/15 backdrop-blur">
                    <FaCalendarAlt className="text-xs" />
                  </span>
                  {clinic.hoursShort}
                </p>
              </div>
            </div>

            <div className="relative">
              <Reveal>
                <div className="rounded-3xl border border-white/40 bg-white/95 p-6 shadow-card backdrop-blur dark:bg-secondary-800/95 sm:p-8">
                  <AnimatePresence mode="wait">
                    {submitted ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="flex min-h-[22rem] flex-col items-center justify-center text-center"
                      >
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 12,
                            delay: 0.1,
                          }}
                          className="grid h-20 w-20 place-items-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400"
                        >
                          <FaCheckCircle className="text-4xl" />
                        </motion.span>
                        <h3 className="mt-6 font-display text-2xl font-bold text-secondary-900 dark:text-white">
                          Appointment Requested!
                        </h3>
                        <p className="mt-2 max-w-xs text-sm text-slate-600 dark:text-slate-300">
                          Thank you, {form.name || "patient"}. Our team will
                          call you shortly to confirm your slot.
                        </p>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit}
                        className="space-y-4"
                      >
                        <div>
                          <label className="mb-1.5 block text-xs font-semibold text-slate-600 dark:text-slate-300">
                            Full Name
                          </label>
                          <div className="relative">
                            <FaUser className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                              required
                              name="name"
                              value={form.name}
                              onChange={handleChange}
                              placeholder="e.g. Anita Verma"
                              className={inputBase}
                            />
                          </div>
                        </div>
                        <div>
                          <label className="mb-1.5 block text-xs font-semibold text-slate-600 dark:text-slate-300">
                            Phone Number
                          </label>
                          <div className="relative">
                            <FaPhone className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                              required
                              type="tel"
                              name="phone"
                              value={form.phone}
                              onChange={handleChange}
                              placeholder="+91 98765 43210"
                              className={inputBase}
                            />
                          </div>
                        </div>
                        <div>
                          <label className="mb-1.5 block text-xs font-semibold text-slate-600 dark:text-slate-300">
                            Preferred Date
                          </label>
                          <div className="relative">
                            <FaCalendarAlt className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                              required
                              type="date"
                              name="date"
                              min={today}
                              value={form.date}
                              onChange={handleChange}
                              className={`${inputBase} [color-scheme:light] dark:[color-scheme:dark]`}
                            />
                          </div>
                        </div>
                        <div>
                          <label className="mb-1.5 block text-xs font-semibold text-slate-600 dark:text-slate-300">
                            Message{" "}
                            <span className="font-normal text-slate-400">
                              (optional)
                            </span>
                          </label>
                          <div className="relative">
                            <FaCommentDots className="pointer-events-none absolute left-4 top-4 text-slate-400" />
                            <textarea
                              name="message"
                              value={form.message}
                              onChange={handleChange}
                              rows={3}
                              placeholder="Describe your concern briefly…"
                              className={`${inputBase} resize-none`}
                            />
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="btn-primary w-full px-6 py-3.5 text-base"
                        >
                          Book Appointment
                        </button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
