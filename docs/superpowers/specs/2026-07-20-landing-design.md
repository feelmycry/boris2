# Private Auto Brokerage — Landing Site (boris2) Design Spec

**Date:** 2026-07-20  
**Source content:** C:\Users\thisi\boris1  
**Design system reference:** C:\Users\thisi\Downloads\DESIGN.md (Drive Capital editorial style)  
**Approach:** Fully editorial on cream canvas — DESIGN.md layout/typography, boris1 navy/gold colors

---

## 1. Design System Tokens

### Colors
```css
--color-cream:   #fff8f1   /* page background (from DESIGN.md) */
--color-ash:     #e2e8f0   /* hairline dividers, card borders (from DESIGN.md) */
--color-navy:    #111856   /* display headlines, dark elements (from boris1) */
--color-gold:    #C9A84C   /* accent, buttons, icons, links (from boris1) */
--color-text:    #1A1F4E   /* body text (from boris1) */
--color-muted:   #5B6497   /* secondary text, tags (from boris1) */
```

Gold (#C9A84C) replaces Voltage Blue (#006eff) from DESIGN.md as the sole chromatic accent.

### Typography
Fonts already loaded in boris1 — no new imports needed:
- **Playfair Display** — display headlines (substitute for Editorial New from DESIGN.md)
- **Dancing Script** — brand logo "Private" only
- **Inter** — all non-display text (substitute for Founders Grotesk from DESIGN.md)

#### Type Scale (from DESIGN.md)
| Role | Size | Line Height | Letter Spacing |
|------|------|-------------|----------------|
| display | 120px | 0.95 | -2.4px |
| heading-lg | 77px | 0.95 | -1.54px |
| heading | 62px | 1.0 | -1.24px |
| heading-sm | 38px | 1.2 | -0.76px |
| subheading | 28px | 1.2 | -0.56px |
| body-lg | 21px | 1.5 | -0.42px |
| body | 18px | 1.5 | -0.36px |
| body-sm | 16px | 1.5 | -0.32px |

All text uses Inter weight 300 for labels/headings, weight 400 for body — except display headlines which use Playfair Display.

### Spacing (from DESIGN.md)
- Page horizontal padding: 144px
- Section vertical padding: 150px
- Element gap: 20–29px
- Card padding: 14px

### Shapes
- Buttons: 60px border-radius (pills)
- Cards: 0px border-radius (flat)
- Borders: 1.5px solid #e2e8f0

### Elevation
Strictly shadowless. All separation via hairline ash borders and whitespace.

---

## 2. Components

### Outlined Pill Button
60px border-radius, 1.5px gold (#C9A84C) border, transparent fill, 14px/43px padding.  
Label: Inter weight 300, 16px, uppercase, gold.  
**Never filled** — the outline IS the button.

### Nav Rule Bar
Full-width, 144px horizontal padding, 1.5px gold bottom border.  
Left: Logo ("Private" Dancing Script 22px + "insured by" stamp Inter 700 9px).  
Right: Links Inter 300 16px navy uppercase, evenly spaced. "Контакты" as gold outlined pill.

### Display Serif Headline (Section Opener)
Playfair Display weight 300–400, 77–120px, navy, centered.  
Line-height 0.95, letter-spacing -1.54px.  
150px padding above and below. No supporting subtitle.

### Body Copy Block
Inter weight 400, 18px, line-height 1.5, color #1A1F4E.  
Centered column, max 600px wide.  
29px margin between paragraphs.

### Service Card
0px border-radius, 1.5px ash border, flat cream surface.  
14px padding. Icon in gold. Name in Inter 300 subheading size. Tag in Inter 300 uppercase gold small. Description in Inter 400 body.

### Work Card
Same flat style as service card. Badge in gold, model in Playfair, price as editorial bold number.

### Video Block
Video element inside flat card wrapper with ash border. Caption row with play icon + text.

---

## 3. Page Sections

### Navbar
- Fixed position, cream (#fff8f1) background at all times — no dark transition
- On scroll: adds 1.5px ash (#e2e8f0) bottom border to indicate position; background stays cream
- 68px height
- Logo left: "Private" (Dancing Script) + "insured by" (Inter)
- Links: Главная, О компании, Услуги, Наши работы + "Контакты" pill button
- Mobile: hamburger → full-width dropdown

### Hero
- 150px vertical padding
- Two-line display headline:
  - Line 1: "Private" — Dancing Script 80px, navy
  - Line 2: "Auto Brokerage" — Playfair Display 300, 77px, navy
- Eyebrow above: "Автострахование и брокерские услуги" — Inter 300, 21px, gold
- CTAs: "Получить консультацию" (gold pill) + "Наши услуги" (ash border pill)
- Stats block: three editorial columns
  - 500+ / клиентов застраховано
  - 15+  / страховых партнёров
  - 98%  / клиентов рекомендуют нас
- Hairline ash bottom border divides from next section

### О компании
- Section opener: Playfair Display 77px navy centered, "Страхуем с умом, подбираем с душой"
- Hairline ash divider
- Body copy block max 600px (3 paragraphs from boris1)
- Stats row: 4 animated counters as editorial big numbers (Playfair) + Inter labels

### Услуги
- Section opener: Playfair 62px navy, "Все виды страхования в одном окне"
- Subtitle: Inter 300 18px muted
- 2×4 grid of service cards (8 services):
  ОСАГО, КАСКО, Жизнь и здоровье, ДМС, Имущество, Путешествия, Ипотека, Бизнес
- Each card: icon (gold), name, description, tag pill

### Наши работы
- Section opener: Playfair 77px navy
- 3 work cards in a row:
  - Changan Qiyuan Q05 Air (электромобиль) — 1 794 860 ₽
  - Changan Qiyuan A06 240 Laser Ultra+ (гибрид) — 2 690 000 ₽
  - Audi (премиум) — под ключ
- 3 videos below in a row:
  - video2.mov — Changan Q05 Air
  - video3.mov — Changan A06
  - video1.mov — Toyota

### Контакты
- Section opener: Playfair 62px navy, "Свяжитесь с нами"
- Two-column layout:
  - Left: contact items (Phone, Telegram, Hours)
    - +7 965 371 2748
    - @Private_auto_brokerage
    - Ежедневно 9:00–21:00
  - Right: intro text + two gold pill buttons
    - "Написать в Telegram" → https://t.me/Private_auto_brokerage
    - "Написать в WhatsApp" → https://wa.me/79653712748

### Footer
- 1.5px ash top border
- Row: Logo | © 2024 Private Auto Brokerage. Все права защищены. | +7 965 371 2748

---

## 4. Tech Stack
- React 18 + Vite
- Framer Motion (animations — fade in, stagger grids, animated counters)
- Google Fonts: Playfair Display, Inter, Dancing Script (already configured in boris1)
- No external CSS framework — vanilla CSS custom properties
- Videos: video1.mov, video2.mov, video3.mov (copied from boris1)
- Deployed to Vercel (same as boris1)

---

## 5. Do's and Don'ts

### Do
- Use gold (#C9A84C) for all interactive borders, icons, and accent text
- Keep all type tight: letter-spacing -0.02em across the board
- Use 60px border-radius for every button — never mix with 4px/8px
- Maintain 144px horizontal page padding for top-level layouts
- Keep cards flat on cream with only hairline ash borders
- Use Inter weight 300 for all headings/labels (whisper-weight is the signature)

### Don't
- Don't use filled buttons — all actions are outlined gold pills
- Don't add drop shadows, gradients, or elevation effects
- Don't use Playfair Display for body copy — display headlines only
- Don't mix navy as a background color — this is Approach A (all cream)
- Don't center body paragraphs beyond 600px
- Don't use font-weight 600+ anywhere
