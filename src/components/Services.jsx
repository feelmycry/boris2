import { motion } from 'framer-motion'
import { FadeIn, StaggerGrid, itemVariant } from './FadeIn'

const services = [
  {
    name: 'ОСАГО',
    tag: 'Обязательное',
    desc: 'Обязательное страхование автогражданской ответственности. Анализируем ваш профиль водителя и находим наиболее выгодный тариф среди 15+ партнёров. Без очередей — оформление онлайн за 24 часа.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 11.5h14M5 11.5L7 7h10l2 4.5M5 11.5v5h14v-5M7.5 16.5v1.5M16.5 16.5v1.5M3 11.5h2M19 11.5h2"/>
        <circle cx="8" cy="17" r="1"/><circle cx="16" cy="17" r="1"/>
      </svg>
    ),
  },
  {
    name: 'КАСКО',
    tag: 'Рекомендуемое',
    desc: 'Комплексная защита автомобиля от угона, ДТП, стихийных бедствий и вандализма. Подбираем пакет под реальные риски: франшиза, телематика, GAP — только то, что нужно именно вам.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l8 3.5V12c0 5-8 9-8 9s-8-4-8-9V6.5L12 3z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
  },
  {
    name: 'Страхование жизни и здоровья',
    tag: 'Личное',
    desc: 'Накопительное, рисковое и инвестиционное страхование жизни. Разрабатываем стратегию с учётом вашего возраста, семейного положения и финансовых целей.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
      </svg>
    ),
  },
  {
    name: 'ДМС',
    tag: 'Медицинское',
    desc: 'Добровольное медицинское страхование для физических лиц и корпоративных клиентов. Программа под ваш бюджет: амбулатория, стационар, стоматология, скорая помощь.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M12 8v8M8 12h8"/>
      </svg>
    ),
  },
  {
    name: 'Страхование имущества',
    tag: 'Имущество',
    desc: 'Защита квартиры, дома, дачи и ценного имущества от пожара, затопления и кражи. Покрытие под реальную стоимость объекта — без навязанных опций.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/>
        <path d="M9 21V12h6v9"/>
      </svg>
    ),
  },
  {
    name: 'Страхование путешествий',
    tag: 'Туристическое',
    desc: 'Страховки для выезда за рубеж: медицинская помощь, отмена поездки, потеря багажа. Учитываем маршрут и активности — экстремальный спорт, горнолыжный отдых, круиз.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 3L3 10.5l7.5 3 3 7.5L21 3z"/>
        <path d="M10.5 13.5l4-4"/>
      </svg>
    ),
  },
  {
    name: 'Ипотечное страхование',
    tag: 'Ипотека',
    desc: 'Комплексное страхование при ипотеке: имущество, жизнь и титул. Подбираем аккредитованные компании с минимальными тарифами и экономим вам тысячи рублей ежегодно.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="9" width="18" height="13" rx="1"/>
        <path d="M8 9V5a1 1 0 011-1h6a1 1 0 011 1v4M12 14v2"/>
        <path d="M9 14h6"/>
      </svg>
    ),
  },
  {
    name: 'Страхование бизнеса',
    tag: 'Корпоративное',
    desc: 'Комплексная защита компании: имущество, ответственность перед третьими лицами, страхование сотрудников. Корпоративные программы под специфику вашей отрасли.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="15" rx="2"/>
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2M12 12v3M10 13.5h4"/>
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="section" aria-label="Услуги">
      <div className="container">
        <FadeIn>
          <div className="services-header">
            <h2 className="sec-title">Все виды страхования<br />в одном окне</h2>
            <p className="sec-sub">Индивидуальный подход к каждому — без шаблонных решений и навязанных пакетов</p>
          </div>
        </FadeIn>

        <StaggerGrid className="services-grid" stagger={0.07}>
          {services.map(s => (
            <motion.div className="srv-card" key={s.name} variants={itemVariant}>
              <div className="srv-icon">{s.icon}</div>
              <div className="srv-name">{s.name}</div>
              <div className="srv-desc">{s.desc}</div>
              <span className="srv-tag">{s.tag}</span>
            </motion.div>
          ))}
        </StaggerGrid>
      </div>
    </section>
  )
}
