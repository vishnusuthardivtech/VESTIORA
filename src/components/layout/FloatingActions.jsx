import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function FloatingActions() {
  const btnBase =
    'inline-flex h-12 w-12 items-center justify-center rounded-2xl shadow-xl ring-1 ring-black/5 backdrop-blur bg-white/70 hover:bg-white'

  return (
    <div className="fixed right-4 top-[92px] z-50 flex flex-col gap-3">
      <motion.a
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.98 }}
        href="tel:+910000000000"
        className={`${btnBase} text-vestiora-royalBlue`}
        aria-label="Call"
      >
        <FaPhoneAlt />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.98 }}
        href="https://wa.me/910000000000"
        target="_blank"
        rel="noreferrer"
        className={`${btnBase} text-emerald-600`}
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </motion.a>
    </div>
  )
}

