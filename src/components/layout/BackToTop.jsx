import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaArrowUp } from 'react-icons/fa'

export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.button
      initial={{ opacity: 0, y: 10, pointerEvents: 'none' }}
      animate={{
        opacity: show ? 1 : 0,
        y: show ? 0 : 10,
        pointerEvents: show ? 'auto' : 'none',
      }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-4 z-50 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-vestiora-royalBlue text-white shadow-xl ring-1 ring-vestiora-royalBlue/30 hover:brightness-105"
      aria-label="Back to top"
    >
      <FaArrowUp />
    </motion.button>
  )
}

