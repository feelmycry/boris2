import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

export function FadeIn({ children, delay = 0, y = 24, x = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

export const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export function StaggerGrid({ children, className, stagger = 0.08 }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
    >
      {children}
    </motion.div>
  )
}
