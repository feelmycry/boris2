import { useEffect, useRef, useState } from 'react'
import { useInView, motion } from 'framer-motion'
import { FadeIn, StaggerGrid, itemVariant } from './FadeIn'

function useCounter(end, duration = 1800) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let startTime = null
    function animate(ts) {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(animate)
      else setCount(end)
    }
    requestAnimationFrame(animate)
  }, [inView, end, duration])

  return { ref, count }
}

function StatCard({ num, suffix = '', label }) {
  const { ref, count } = useCounter(num)
  return (
    <motion.div className="a-stat" ref={ref} variants={itemVariant}>
      <div className="a-stat-num">{count}{suffix}</div>
      <div className="a-stat-label">{label}</div>
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="section" aria-label="О компании">
      <div className="container">
        <FadeIn>
          <h2 className="sec-title">Страхуем с умом,<br />подбираем с душой</h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="about-body">
            <p>
              Private Auto Brokerage начала свой путь с простой идеи: страхование автомобиля не должно быть
              головной болью. С первых дней работы мы поставили клиента в центр всего — не страховой полис
              ради галочки, а реальная защита, подобранная под вашу жизненную ситуацию.
            </p>
            <p>
              За годы работы мы выстроили глубокие партнёрские отношения с 15&nbsp;+ ведущими страховыми
              компаниями России. Это позволяет нам сравнивать десятки предложений в режиме реального времени
              и выбирать то, что действительно выгодно именно вам — без переплат и скрытых условий.
            </p>
            <p>
              Мы специализируемся на КАСКО и ОСАГО, но наша экспертиза охватывает все виды страхования:
              здоровье, путешествия, имущество и бизнес. Каждый клиент получает персонального менеджера,
              который остаётся на связи 24/7 и сопровождает при страховом случае.
            </p>
          </div>
        </FadeIn>

        <StaggerGrid className="about-stats" stagger={0.1}>
          <StatCard num={500} suffix="+" label="клиентов застраховано за всё время работы" />
          <StatCard num={15}  suffix="+" label="страховых компаний-партнёров" />
          <StatCard num={98}  suffix="%" label="клиентов рекомендуют нас близким" />
          <motion.div className="a-stat" variants={itemVariant}>
            <div className="a-stat-num">24 ч</div>
            <div className="a-stat-label">среднее время оформления полиса</div>
          </motion.div>
        </StaggerGrid>
      </div>
    </section>
  )
}
