import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  return (
    <section id="home" aria-label="Главная">
      <div className="hero-wrap">
        <motion.div
          className="hero-eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
        >
          Автострахование и брокерские услуги
        </motion.div>

        <motion.div
          className="hero-title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease }}
        >
          <span className="hero-title-script">Private</span>
          <span className="hero-title-serif">Auto Brokerage</span>
        </motion.div>

        <motion.div
          className="hero-ctas"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease }}
        >
          <a href="#contacts" className="btn-pill">Получить консультацию</a>
          <a href="#services" className="btn-pill btn-pill-ash">Наши услуги</a>
        </motion.div>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease }}
        >
          <div className="hero-stat">
            <div className="stat-num">500+</div>
            <div className="stat-label">клиентов застраховано</div>
          </div>
          <div className="hero-stat">
            <div className="stat-num">15+</div>
            <div className="stat-label">страховых партнёров</div>
          </div>
          <div className="hero-stat">
            <div className="stat-num">98%</div>
            <div className="stat-label">клиентов рекомендуют нас</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
