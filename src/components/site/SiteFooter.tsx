import { Link } from 'react-router-dom';

const LOGO_URL = 'https://storage.readdy-site.link/project_files/23941d3d-9a18-41cf-ae5d-fa1b92b52dad/33e904ea-19a6-45dc-be29-6d2cb3be6b79_WhatsApp-Image-2026-03-25-at-08.57.54.jpeg?v=eef4cad0d00bcc103d78cc3a6f3c4bec';

const footerLinks = {
  services: [
    { label: 'Achat immobilier', path: '/site/immobilier' },
    { label: 'Location & gestion', path: '/site/immobilier' },
    { label: 'Vente de biens', path: '/site/immobilier' },
    { label: 'Travaux & Construction', path: '/site/travaux' },
    { label: 'Plomberie & Électricité', path: '/site/travaux' },
  ],
  rapides: [
    { label: 'Nos biens', path: '/site/biens' },
    { label: 'Catalogue services', path: '/site/catalogue' },
    { label: 'Actualités', path: '/site/actualites' },
    { label: 'À propos', path: '/site/a-propos' },
    { label: 'Contact', path: '/site/contact' },
  ],
};

const socials = [
  { icon: 'ri-whatsapp-line', href: 'https://wa.me/221771234567', color: '#25D366' },
  { icon: 'ri-facebook-line', href: '#', color: '#1877F2' },
  { icon: 'ri-instagram-line', href: '#', color: '#E1306C' },
  { icon: 'ri-linkedin-line', href: '#', color: '#0A66C2' },
];

export default function SiteFooter() {
  return (
    <footer style={{ background: '#0B1929', fontFamily: 'Open Sans, sans-serif' }}>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand column */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-5">
            <div className="overflow-hidden flex-shrink-0 rounded-xl" style={{ width: '52px', height: '52px' }}>
              <img src={LOGO_URL} alt="XMT GROUPE" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-black text-white text-base leading-none" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '0.12em' }}>XMT GROUPE</div>
              <div className="text-xs leading-none mt-1.5" style={{ color: 'rgba(255,255,255,0.4)', letterSpacing: '0.12em', fontSize: '10px' }}>IMMOBILIER · TRAVAUX · SERVICES</div>
            </div>
          </div>
          <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Votre partenaire immobilier de confiance depuis 2013. Achat, vente, location, travaux et gestion au Sénégal.
          </p>
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.icon}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg transition-all hover:scale-110 cursor-pointer"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <i className={`${s.icon} text-sm`} style={{ color: 'rgba(255,255,255,0.55)' }} />
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h4
            className="font-bold text-xs mb-5 uppercase tracking-[0.2em]"
            style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'Poppins, sans-serif' }}
          >
            Nos services
          </h4>
          <ul className="space-y-3">
            {footerLinks.services.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.path}
                  className="text-sm transition-all hover:text-white inline-block cursor-pointer"
                  style={{ color: 'rgba(255,255,255,0.5)' }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Liens rapides */}
        <div>
          <h4
            className="font-bold text-xs mb-5 uppercase tracking-[0.2em]"
            style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'Poppins, sans-serif' }}
          >
            Navigation
          </h4>
          <ul className="space-y-3">
            {footerLinks.rapides.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.path}
                  className="text-sm transition-all hover:text-white inline-block cursor-pointer"
                  style={{ color: 'rgba(255,255,255,0.5)' }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/login"
                className="text-sm transition-all hover:text-white inline-block cursor-pointer"
                style={{ color: 'rgba(255,255,255,0.25)' }}
              >
                Espace CRM
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4
            className="font-bold text-xs mb-5 uppercase tracking-[0.2em]"
            style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'Poppins, sans-serif' }}
          >
            Contact
          </h4>
          <ul className="space-y-4">
            {[
              { icon: 'ri-map-pin-2-line', text: 'Rufisque, Dakar, Sénégal' },
              { icon: 'ri-phone-line', text: '+221 77 123 45 67' },
              { icon: 'ri-mail-line', text: 'contact@xmt-groupe.sn' },
              { icon: 'ri-time-line', text: 'Lun–Sam, 8h–18h' },
            ].map((item) => (
              <li key={item.icon} className="flex items-start gap-3">
                <i className={`${item.icon} text-sm mt-0.5 flex-shrink-0`} style={{ color: 'rgba(255,255,255,0.3)' }} />
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>{item.text}</span>
              </li>
            ))}
          </ul>
          <a
            href="https://wa.me/221771234567"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold cursor-pointer whitespace-nowrap hover:opacity-90 transition-all"
            style={{ background: 'rgba(37,211,102,0.12)', color: '#25D366', border: '1px solid rgba(37,211,102,0.2)', fontFamily: 'Poppins, sans-serif' }}
          >
            <i className="ri-whatsapp-line" /> WhatsApp
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="max-w-7xl mx-auto px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
            &copy; 2026 XMT GROUPE. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>Rufisque, Dakar — Sénégal</span>
            <span className="w-px h-3 bg-white/10" />
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>xmt-groupe.sn</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
