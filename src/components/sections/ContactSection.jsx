import SectionHeader from '../ui/SectionHeader'
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function ContactSection({ brand }) {
  return (
    <section id="contact" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeader
          kicker="CONTACT"
          title="Reach our fabric team"
          description="Catalog viewing only—contact us for samples, pricing and bulk wholesale enquiries."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[32px] bg-white/60 p-7 ring-1 ring-black/5 backdrop-blur shadow-luxury">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-vestiora-royalBlue/10 ring-1 ring-vestiora-royalBlue/20 text-vestiora-royalBlue">
                <FaMapMarkerAlt />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-900">Business Address</div>
                <div className="mt-1 text-xs font-semibold tracking-[0.22em] text-slate-500">SURAT • GUJARAT</div>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Replace with your showroom address. We ship wholesale across India.
            </p>

            <div className="mt-6 space-y-4">
              <motion.a
                whileHover={{ x: 4 }}
                className="flex items-center justify-between rounded-2xl bg-white/70 p-4 ring-1 ring-black/5 hover:bg-white"
                href="tel:+910000000000"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-vestiora-royalBlue/10 ring-1 ring-vestiora-royalBlue/20 text-vestiora-royalBlue">
                    <FaPhoneAlt />
                  </span>
                  <div>
                    <div className="text-xs font-semibold tracking-[0.22em] text-vestiora-royalBlue">PHONE</div>
                    <div className="mt-1 text-sm font-semibold text-slate-900">+91 00000 00000</div>
                  </div>
                </div>
                <div className="text-sm font-semibold text-slate-600">Call</div>
              </motion.a>

              <motion.a
                whileHover={{ x: 4 }}
                className="flex items-center justify-between rounded-2xl bg-white/70 p-4 ring-1 ring-black/5 hover:bg-white"
                href="https://wa.me/910000000000"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
                    <FaWhatsapp />
                  </span>
                  <div>
                    <div className="text-xs font-semibold tracking-[0.22em] text-emerald-600">WHATSAPP</div>
                    <div className="mt-1 text-sm font-semibold text-slate-900">Chat for bulk fabrics</div>
                  </div>
                </div>
                <div className="text-sm font-semibold text-slate-600">Open</div>
              </motion.a>

              <motion.a
                whileHover={{ x: 4 }}
                className="flex items-center justify-between rounded-2xl bg-white/70 p-4 ring-1 ring-black/5 hover:bg-white"
                href="mailto:hello@vestiora.com"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-50 text-slate-700 ring-1 ring-slate-200">
                    <FaEnvelope />
                  </span>
                  <div>
                    <div className="text-xs font-semibold tracking-[0.22em] text-slate-700">EMAIL</div>
                    <div className="mt-1 text-sm font-semibold text-slate-900">hello@vestiora.com</div>
                  </div>
                </div>
                <div className="text-sm font-semibold text-slate-600">Mail</div>
              </motion.a>
            </div>
          </div>

          <div className="rounded-[32px] bg-white/60 p-7 ring-1 ring-black/5 backdrop-blur shadow-luxury">
            <div className="text-sm font-semibold text-slate-900">Google Maps</div>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Use the button below to open your location in Google Maps.
            </p>

            <div className="mt-6 overflow-hidden rounded-3xl ring-1 ring-black/5">
              <iframe
                title="Map"
                src="https://www.google.com/maps?q=surat&amp;output=embed"
                loading="lazy"
                className="h-72 w-full border-0"
              />
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                href="https://www.google.com/maps?q=surat"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-vestiora-royalBlue px-5 py-3 text-sm font-semibold text-white shadow-lg ring-1 ring-vestiora-royalBlue/25 hover:brightness-105"
              >
                Open Maps
              </a>
              <a
                href="https://wa.me/910000000000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-white/70 px-5 py-3 text-sm font-semibold text-slate-800 ring-1 ring-black/5 backdrop-blur hover:bg-white"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

