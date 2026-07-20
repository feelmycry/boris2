import { motion } from 'framer-motion'

function WheelCenter({ cx, cy }) {
  return (
    <motion.g
      style={{ transformBox: 'fill-box', transformOrigin: '50% 50%' }}
      animate={{ rotate: 360 }}
      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
    >
      <circle cx={cx} cy={cy} r={14} fill="#C9A84C" opacity="0.18" />
      <circle cx={cx} cy={cy} r={10} fill="#C9A84C" />
      <circle cx={cx} cy={cy} r={4} fill="#0D1444" />
      <line x1={cx} y1={cy - 12} x2={cx} y2={cy + 12} stroke="#0D1444" strokeWidth="2.5" />
      <line x1={cx - 12} y1={cy} x2={cx + 12} y2={cy} stroke="#0D1444" strokeWidth="2.5" />
      <line x1={cx - 8} y1={cy - 8} x2={cx + 8} y2={cy + 8} stroke="#0D1444" strokeWidth="1.5" />
      <line x1={cx + 8} y1={cy - 8} x2={cx - 8} y2={cy + 8} stroke="#0D1444" strokeWidth="1.5" />
    </motion.g>
  )
}

export default function CarIllustration() {
  return (
    <motion.div
      className="car-illustration"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.svg
        viewBox="0 0 500 185"
        width="100%"
        height="auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Автомобиль Private Auto Brokerage"
        style={{ display: 'block' }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Animated ground shadow */}
        <motion.ellipse
          cx="252" cy="178" rx="185" ry="7"
          fill="#111856"
          animate={{ opacity: [0.1, 0.04, 0.1], scaleX: [1, 0.82, 1] }}
          style={{ transformOrigin: '252px 178px' }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Body */}
        <path
          d="M48 150 L48 112 Q48 100 61 95 L108 92 L155 52 Q168 28 202 24 L316 24 Q353 24 381 47 L436 86 Q453 94 453 107 L453 150 Z"
          fill="#111856"
        />

        {/* Cabin highlight */}
        <path
          d="M160 90 L170 52 Q180 30 204 26 L316 26 Q348 26 374 47 L425 86 Z"
          fill="#1B2473"
        />

        {/* Rear window */}
        <path
          d="M169 86 L178 52 Q187 33 205 28 L284 28 L284 86 Z"
          fill="#fff8f1"
          opacity="0.1"
        />

        {/* B-pillar */}
        <rect x="286" y="24" width="8" height="65" fill="#111856" />

        {/* Front window */}
        <path
          d="M296 86 L296 28 L316 28 Q345 28 370 47 L418 84 Z"
          fill="#fff8f1"
          opacity="0.1"
        />

        {/* Door lines */}
        <line x1="170" y1="90" x2="170" y2="148" stroke="#0a1038" strokeWidth="1.5" opacity="0.8" />
        <line x1="292" y1="90" x2="292" y2="148" stroke="#0a1038" strokeWidth="1.5" opacity="0.8" />

        {/* Door handles */}
        <rect x="218" y="118" width="20" height="4" rx="2" fill="#C9A84C" opacity="0.65" />
        <rect x="328" y="118" width="20" height="4" rx="2" fill="#C9A84C" opacity="0.65" />

        {/* Taillight */}
        <rect x="44" y="100" width="8" height="24" rx="3" fill="#C9A84C" opacity="0.9" />

        {/* Headlight */}
        <ellipse cx="447" cy="102" rx="8" ry="6" fill="#C9A84C" />

        {/* Grille lines */}
        <line x1="449" y1="114" x2="453" y2="114" stroke="#C9A84C" strokeWidth="1.5" />
        <line x1="449" y1="120" x2="453" y2="120" stroke="#C9A84C" strokeWidth="1.5" />
        <line x1="449" y1="126" x2="453" y2="126" stroke="#C9A84C" strokeWidth="1.5" />

        {/* Antenna */}
        <line x1="428" y1="24" x2="418" y2="88" stroke="#1B2473" strokeWidth="1.5" strokeLinecap="round" />

        {/* Rear wheel - static tire */}
        <circle cx="120" cy="150" r="34" fill="#0D1444" />
        <circle cx="120" cy="150" r="26" fill="#111856" stroke="#C9A84C" strokeWidth="1.5" />
        <WheelCenter cx={120} cy={150} />

        {/* Front wheel - static tire */}
        <circle cx="386" cy="150" r="34" fill="#0D1444" />
        <circle cx="386" cy="150" r="26" fill="#111856" stroke="#C9A84C" strokeWidth="1.5" />
        <WheelCenter cx={386} cy={150} />
      </motion.svg>
    </motion.div>
  )
}
