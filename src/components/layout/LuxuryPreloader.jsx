import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function LuxuryPreloader() {
  const [open, setOpen] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setOpen(false), 1300)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-white"
        >
          <div className="relative overflow-hidden rounded-[28px] border border-black/5 bg-white/70 px-10 py-10 shadow-2xl">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-vestiora-royalBlue/0 via-vestiora-royalBlue/25 to-vestiora-royalBlue/0 opacity-80" />
            <div className="relative">
              <div className="text-center">
                <div className="mx-auto mb-4 h-14 w-14 rounded-3xl bg-vestiora-royalBlue/10 ring-1 ring-vestiora-royalBlue/20 flex items-center justify-center">
                  <div className="text-vestiora-royalBlue text-lg font-semibold">V</div>
                </div>
                <div className="text-sm font-semibold tracking-[0.22em] text-slate-600">
                  VESTIORA
                </div>
                <div className="mt-3 h-2 w-64 rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full w-1/3 bg-vestiora-royalBlue animate-[shimmer_2.4s_ease-in-out_infinite] bg-[length:200%_200%]" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

