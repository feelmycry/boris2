import { FadeIn } from './FadeIn'

export default function Footer() {
  return (
    <FadeIn y={16}>
      <footer>
        <div className="footer-in">
          <div className="f-logo">
            <div className="script">Private</div>
            <div className="stamp">insured by</div>
          </div>
          <div className="f-copy">© 2024 Private Auto Brokerage. Все права защищены.</div>
          <div className="f-copy">
            <a href="tel:+79653712748">+7 965 371 2748</a>
          </div>
        </div>
      </footer>
    </FadeIn>
  )
}
