import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

const footerLinks = [
  { label: 'About', id: 'about' },
  { label: 'Collections', id: 'collections' },
  { label: 'Gallery', id: 'gallery' },
  { label: 'Videos', id: 'videos' },
  { label: 'Contact', id: 'contact' },
]

export default function Footer({ brand }) {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-slate-200 bg-white/70">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-vestiora-royalBlue/10 ring-1 ring-vestiora-royalBlue/20">
                <span className="text-sm font-semibold tracking-wide text-vestiora-royalBlue">V</span>
              </div>
              <div>
                <div className="text-base font-semibold tracking-wide text-slate-900">{brand}</div>
                <div className="mt-1 text-xs font-medium tracking-[0.18em] text-slate-500">
                  PREMIUM FABRIC COLLECTION
                </div>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-600">
              A premium digital fabric catalogue—browse designer, embroidery, sequins and ethnic collections.
            </p>
          </div>

          <div className="lg:pl-10">
            <div className="text-sm font-semibold text-slate-900">Navigation</div>
            <div className="mt-4 flex flex-col gap-2">
              {footerLinks.map((l) => (
                <a key={l.id} href={`#${l.id}`} className="text-sm text-slate-600 hover:text-slate-900">
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-slate-900">Social</div>
            <div className="mt-4 flex items-center gap-3">
              {[FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/70 ring-1 ring-black/5 text-slate-700 hover:bg-vestiora-very-light-blue/70"
                  aria-label="Social link"
                >
                  <Icon />
                </a>
              ))}
            </div>

            <div className="mt-8 text-xs text-slate-500">
              © {year} {brand}. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

