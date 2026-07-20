import { motion } from 'framer-motion'
import { FadeIn, StaggerGrid, itemVariant } from './FadeIn'

const cars = [
  {
    badge: 'Электромобиль',
    model: 'Changan Qiyuan Q05 Air',
    year: '2026 год',
    price: '1 794 860 ₽',
    priceSub: 'под ключ до вашего города (±15 000 ₽)',
    features: [
      'До 405 км на электротяге',
      '540° круговой обзор с прозрачным шасси',
      'Экран 14,6″ + цифровая панель 10,17″',
      'Поддержка CarPlay / HiCar',
      'Подогрев и вентиляция передних сидений',
      'Покупка, таможня, доставка, страховка включены',
    ],
    foot: 'Зарядная станция и коврики в подарок · Русификация +2000 ¥',
  },
  {
    badge: 'Гибрид / Электро',
    model: 'Changan Qiyuan A06 240 Laser Ultra+',
    year: '2026 год',
    price: '2 690 000 ₽',
    priceSub: 'под ключ до вашего города (±20 000 ₽)',
    features: [
      'Общий запас хода более 2120 км',
      'Лидар и интеллектуальный автопилот City NOA',
      'Проекционный дисплей HUD + экран 15,6″',
      'Подогрев, вентиляция и массаж всех сидений',
      'Панорамная крыша · Беспроводная зарядка 50 Вт',
      'Покупка, таможня, доставка, страховка включены',
    ],
    foot: 'Зарядная станция и коврики в подарок · Русификация +2000 ¥',
  },
  {
    badge: 'Премиум',
    model: 'Audi',
    year: 'Реализованный проект',
    price: 'Под ключ',
    priceSub: 'полное сопровождение сделки',
    features: [
      'Подбор и проверка автомобиля под запрос клиента',
      'Юридическое сопровождение сделки',
      'Страхование КАСКО и ОСАГО в подарок',
      'Оплата поэтапно по инвойсу через ВТБ',
      'Фото и видеоотчёты на каждом этапе',
      'Покупка, таможня, доставка, страховка включены',
    ],
    foot: 'Страховка включена · Полное сопровождение сделки',
  },
]

const videos = [
  { src: 'video2.mov', caption: 'Видеообзор — Changan Qiyuan Q05 Air', label: 'Видеообзор Changan Q05' },
  { src: 'video3.mov', caption: 'Видеообзор — Changan Qiyuan A06',     label: 'Видеообзор Changan A06' },
  { src: 'video1.mov', caption: 'Видеообзор — Toyota',                  label: 'Видеообзор Toyota' },
]

function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="5 3 19 12 5 21 5 3"/>
    </svg>
  )
}

export default function Works() {
  return (
    <section id="works" className="section" aria-label="Наши работы">
      <div className="container">
        <FadeIn>
          <h2 className="sec-title">Реализованные проекты</h2>
          <p className="sec-sub">
            Автомобили, которые мы помогли клиентам приобрести и застраховать — под ключ до вашего города
          </p>
        </FadeIn>

        <StaggerGrid className="works-cards" stagger={0.1}>
          {cars.map(car => (
            <motion.article className="work-card" key={car.model} variants={itemVariant}>
              <div className="wc-head">
                <div className="wc-badge">{car.badge}</div>
                <div className="wc-model">{car.model}</div>
                <div className="wc-year">{car.year}</div>
                <div className="wc-price">
                  {car.price}
                  <small>{car.priceSub}</small>
                </div>
              </div>
              <div className="wc-body">
                <ul className="wc-features">
                  {car.features.map(f => <li key={f}>{f}</li>)}
                </ul>
              </div>
              <div className="wc-foot">{car.foot}</div>
            </motion.article>
          ))}
        </StaggerGrid>

        <StaggerGrid className="works-videos" stagger={0.12}>
          {videos.map(v => (
            <motion.div className="vid-wrap" key={v.src} variants={itemVariant}>
              <video controls preload="metadata" aria-label={v.label}>
                <source src={v.src} type="video/mp4" />
                <source src={v.src} type="video/quicktime" />
              </video>
              <div className="vid-caption">
                <PlayIcon />
                {v.caption}
              </div>
            </motion.div>
          ))}
        </StaggerGrid>
      </div>
    </section>
  )
}
