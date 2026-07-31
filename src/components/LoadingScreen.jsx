import { motion } from 'framer-motion';
import { FiActivity } from 'react-icons/fi';

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 z-[100] grid place-items-center bg-surface dark:bg-secondary-900"
    >
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent text-white shadow-glow"
        >
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          >
            <FiActivity className="text-2xl" />
          </motion.span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-5 font-display text-sm font-semibold text-secondary-900 dark:text-white"
        >
          HealthyCare Clinic
        </motion.p>
        <div className="mt-4 h-1 w-32 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            className="h-full w-1/2 rounded-full bg-gradient-to-r from-primary to-accent"
          />
        </div>
      </div>
    </motion.div>
  );
}
