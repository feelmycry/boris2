import { FadeIn } from './FadeIn'

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 010.07 2.18C.07 1.02 1 0 2.16 0h3a2 2 0 012 1.72c.12.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0122 14.9v2z"/>
    </svg>
  )
}

function TelegramSmIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8-1.7 8.02c-.12.56-.46.7-.93.44l-2.57-1.9-1.24 1.2c-.14.13-.26.24-.53.24l.19-2.66 4.85-4.38c.21-.19-.05-.29-.32-.1L7.74 14.6l-2.52-.79c-.55-.17-.56-.55.12-.81l9.85-3.8c.46-.17.86.11.45.6z"/>
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
    </svg>
  )
}

function TelegramBigIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8-1.7 8.02c-.12.56-.46.7-.93.44l-2.57-1.9-1.24 1.2c-.14.13-.26.24-.53.24l.19-2.66 4.85-4.38c.21-.19-.05-.29-.32-.1L7.74 14.6l-2.52-.79c-.55-.17-.56-.55.12-.81l9.85-3.8c.46-.17.86.11.45.6z"/>
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.786.47 3.458 1.29 4.908L2 22l5.236-1.276A9.952 9.952 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.952 7.952 0 01-4.098-1.132l-.294-.174-3.107.757.782-3.02-.192-.31A7.952 7.952 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/>
    </svg>
  )
}

export default function Contacts() {
  return (
    <section id="contacts" className="section" aria-label="Контакты">
      <div className="container">
        <div className="contacts-grid">

          <FadeIn x={-30} y={0} delay={0.05}>
            <div>
              <div className="contact-eyebrow">Контакты</div>
              <h2 className="contact-sec-title">Свяжитесь<br />с нами</h2>
              <p className="contact-sub">
                Ответим на любые вопросы по страхованию и подберём лучшие условия для вашего автомобиля
              </p>
              <div className="contact-items">
                <div className="c-item">
                  <a href="tel:+79653712748" className="c-icon" aria-label="Позвонить">
                    <PhoneIcon />
                  </a>
                  <div>
                    <div className="c-label">Телефон</div>
                    <div className="c-val"><a href="tel:+79653712748">+7 965 371 2748</a></div>
                  </div>
                </div>
                <div className="c-item">
                  <a href="https://t.me/Private_auto_brokerage" target="_blank" rel="noopener" className="c-icon" aria-label="Telegram">
                    <TelegramSmIcon />
                  </a>
                  <div>
                    <div className="c-label">Telegram</div>
                    <div className="c-val">
                      <a href="https://t.me/Private_auto_brokerage" target="_blank" rel="noopener">@Private_auto_brokerage</a>
                    </div>
                  </div>
                </div>
                <div className="c-item">
                  <div className="c-icon"><ClockIcon /></div>
                  <div>
                    <div className="c-label">Время работы</div>
                    <div className="c-val">Ежедневно с 9:00 до 21:00</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn x={30} y={0} delay={0.15}>
            <div className="contact-right">
              <p className="contact-intro">
                Нажмите на кнопку ниже — и вы окажетесь в чате с нашим менеджером.
                Расскажите о своём автомобиле, и мы подберём оптимальную страховку
                в течение нескольких минут. Работаем по всей России.
              </p>
              <div className="msg-btns">
                <a
                  href="https://t.me/Private_auto_brokerage"
                  target="_blank"
                  rel="noopener"
                  className="msg-btn"
                  aria-label="Написать в Telegram"
                >
                  <TelegramBigIcon />
                  Написать в Telegram
                </a>
                <a
                  href="https://wa.me/79653712748"
                  target="_blank"
                  rel="noopener"
                  className="msg-btn"
                  aria-label="Написать в WhatsApp"
                >
                  <WhatsAppIcon />
                  Написать в WhatsApp
                </a>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}
