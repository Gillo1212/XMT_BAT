import { useState, FormEvent } from 'react';
import SiteLayout from '../../../components/site/SiteLayout';

type TabType = 'contact' | 'rdv' | 'devis';

const tabs: { id: TabType; label: string; icon: string }[] = [
  { id: 'contact', label: 'Contact général', icon: 'ri-mail-send-line' },
  { id: 'rdv', label: 'Rendez-vous', icon: 'ri-calendar-2-line' },
  { id: 'devis', label: 'Demande de devis', icon: 'ri-file-list-3-line' },
];

const FORM_URLS: Record<TabType, string> = {
  contact: 'https://readdy.ai/api/form/d6vtnht1l1ubpb129kj0',
  rdv: 'https://readdy.ai/api/form/d6vtnht1l1ubpb129kjg',
  devis: 'https://readdy.ai/api/form/d6vtnht1l1ubpb129kk0',
};

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<TabType>('contact');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<TabType | null>(null);
  const [textLen, setTextLen] = useState(0);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new URLSearchParams();
    new FormData(form).forEach((val, key) => data.append(key, val.toString()));
    try {
      await fetch(FORM_URLS[activeTab], { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: data.toString() });
      setSuccess(activeTab);
      form.reset();
      setTextLen(0);
    } catch {
      /* silent */
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-16" style={{ background: 'linear-gradient(135deg, #0D2137 0%, #1F4E79 100%)' }}>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6" style={{ background: 'rgba(243,156,18,0.2)', color: '#F39C12', border: '1px solid rgba(243,156,18,0.3)' }}>
            Prise de contact
          </span>
          <h1 className="text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Contactez-nous</h1>
          <p className="text-lg text-white/70 max-w-xl mx-auto" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            Notre équipe vous répond sous 24h. Pour toute urgence, appelez-nous directement ou écrivez sur WhatsApp.
          </p>
        </div>
      </section>

      <section className="py-16" style={{ background: '#F4F6F7' }}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Infos contact */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold text-sm mb-5" style={{ color: '#2C3E50', fontFamily: 'Poppins, sans-serif' }}>Coordonnées</h3>
              <ul className="space-y-4">
                {[
                  { icon: 'ri-map-pin-2-line', label: 'Adresse', value: 'Rufisque, Dakar, Sénégal' },
                  { icon: 'ri-phone-line', label: 'Téléphone', value: '+221 77 123 45 67' },
                  { icon: 'ri-mail-line', label: 'Email', value: 'contact@xmt-groupe.sn' },
                  { icon: 'ri-time-line', label: 'Horaires', value: 'Lun–Sam, 8h00–18h00' },
                ].map((item) => (
                  <li key={item.icon} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#EBF5FB' }}>
                      <i className={`${item.icon} text-sm`} style={{ color: '#1F4E79' }} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">{item.label}</p>
                      <p className="text-sm font-medium" style={{ color: '#2C3E50', fontFamily: 'Open Sans, sans-serif' }}>{item.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold text-sm mb-4" style={{ color: '#2C3E50', fontFamily: 'Poppins, sans-serif' }}>Contact rapide</h3>
              <a href="https://wa.me/221771234567" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-md text-sm font-semibold text-white cursor-pointer whitespace-nowrap mb-3"
                style={{ background: '#25D366', fontFamily: 'Poppins, sans-serif' }}
              >
                <i className="ri-whatsapp-line text-base" /> Écrire sur WhatsApp
              </a>
              <a href="tel:+221771234567"
                className="flex items-center gap-3 px-4 py-3 rounded-md text-sm font-semibold cursor-pointer whitespace-nowrap"
                style={{ background: '#EBF5FB', color: '#1F4E79', fontFamily: 'Poppins, sans-serif' }}
              >
                <i className="ri-phone-line text-base" /> Appeler maintenant
              </a>
            </div>

            {/* Map embed */}
            <div className="bg-white rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30867.1!2d-17.27!3d14.71!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172b4cc6abe47%3A0x2b55f17d95e5e8d3!2sRufisque%2C%20S%C3%A9n%C3%A9gal!5e0!3m2!1sfr!2sfr!4v1710000000000"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="XMT GROUPE — Rufisque, Dakar"
              />
            </div>
          </div>

          {/* Formulaires */}
          <div className="lg:col-span-2 bg-white rounded-lg p-8">
            {/* Tabs */}
            <div className="flex gap-1 p-1 rounded-lg mb-8" style={{ background: '#F4F6F7' }}>
              {tabs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => { setActiveTab(t.id); setSuccess(null); }}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-md text-xs font-semibold transition-all cursor-pointer whitespace-nowrap"
                  style={{
                    background: activeTab === t.id ? '#FFFFFF' : 'transparent',
                    color: activeTab === t.id ? '#1F4E79' : '#5D6D7E',
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  <i className={`${t.icon} text-sm`} />
                  <span className="hidden sm:inline">{t.label}</span>
                </button>
              ))}
            </div>

            {success === activeTab ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: '#E8F8F5' }}>
                  <i className="ri-check-line text-2xl" style={{ color: '#1E8449' }} />
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: '#2C3E50', fontFamily: 'Poppins, sans-serif' }}>Message envoyé !</h3>
                <p className="text-sm" style={{ color: '#5D6D7E', fontFamily: 'Open Sans, sans-serif' }}>Notre équipe vous contactera dans les meilleurs délais.</p>
                <button onClick={() => setSuccess(null)} className="mt-5 text-sm font-semibold cursor-pointer whitespace-nowrap" style={{ color: '#1F4E79', fontFamily: 'Poppins, sans-serif' }}>
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <>
                {activeTab === 'contact' && (
                  <form data-readdy-form id="form-contact-xmt" onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="font-bold text-base mb-1" style={{ color: '#2C3E50', fontFamily: 'Poppins, sans-serif' }}>Envoyez-nous un message</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium mb-1.5" style={{ color: '#2C3E50', fontFamily: 'Open Sans, sans-serif' }}>Nom complet *</label>
                        <input required name="nom" type="text" placeholder="Votre nom" className="w-full px-3 py-2.5 rounded-md border text-sm outline-none" style={{ borderColor: '#E5E7EB', color: '#2C3E50', fontFamily: 'Open Sans, sans-serif' }} />
                      </div>
                      <div>
                        <label className="block text-xs font-medium mb-1.5" style={{ color: '#2C3E50', fontFamily: 'Open Sans, sans-serif' }}>Email *</label>
                        <input required name="email" type="email" placeholder="votre@email.com" className="w-full px-3 py-2.5 rounded-md border text-sm outline-none" style={{ borderColor: '#E5E7EB', color: '#2C3E50', fontFamily: 'Open Sans, sans-serif' }} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1.5" style={{ color: '#2C3E50', fontFamily: 'Open Sans, sans-serif' }}>Téléphone</label>
                      <input name="telephone" type="tel" placeholder="+221 77 000 00 00" className="w-full px-3 py-2.5 rounded-md border text-sm outline-none" style={{ borderColor: '#E5E7EB', color: '#2C3E50', fontFamily: 'Open Sans, sans-serif' }} />
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1.5" style={{ color: '#2C3E50', fontFamily: 'Open Sans, sans-serif' }}>Sujet</label>
                      <select name="sujet" className="w-full px-3 py-2.5 rounded-md border text-sm outline-none" style={{ borderColor: '#E5E7EB', color: '#2C3E50', fontFamily: 'Open Sans, sans-serif' }}>
                        <option>Renseignement général</option>
                        <option>Immobilier — achat / vente</option>
                        <option>Location</option>
                        <option>Gestion locative</option>
                        <option>Travaux & BTP</option>
                        <option>Autre</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1.5 flex justify-between" style={{ color: '#2C3E50', fontFamily: 'Open Sans, sans-serif' }}>
                        <span>Message *</span>
                        <span style={{ color: textLen > 500 ? '#E74C3C' : '#95A5A6' }}>{textLen}/500</span>
                      </label>
                      <textarea required name="message" rows={5} placeholder="Décrivez votre demande..." maxLength={500} onChange={(e) => setTextLen(e.target.value.length)} className="w-full px-3 py-2.5 rounded-md border text-sm outline-none resize-none" style={{ borderColor: '#E5E7EB', color: '#2C3E50', fontFamily: 'Open Sans, sans-serif' }} />
                    </div>
                    <button type="submit" disabled={submitting || textLen > 500} className="w-full py-3 rounded-md text-sm font-semibold text-white cursor-pointer whitespace-nowrap disabled:opacity-60" style={{ background: '#1F4E79', fontFamily: 'Poppins, sans-serif' }}>
                      {submitting ? 'Envoi en cours...' : 'Envoyer le message'}
                    </button>
                  </form>
                )}

                {activeTab === 'rdv' && (
                  <form data-readdy-form id="form-rdv-xmt" onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="font-bold text-base mb-1" style={{ color: '#2C3E50', fontFamily: 'Poppins, sans-serif' }}>Demander un rendez-vous</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium mb-1.5" style={{ color: '#2C3E50', fontFamily: 'Open Sans, sans-serif' }}>Nom complet *</label>
                        <input required name="nom" type="text" placeholder="Votre nom" className="w-full px-3 py-2.5 rounded-md border text-sm outline-none" style={{ borderColor: '#E5E7EB', color: '#2C3E50', fontFamily: 'Open Sans, sans-serif' }} />
                      </div>
                      <div>
                        <label className="block text-xs font-medium mb-1.5" style={{ color: '#2C3E50', fontFamily: 'Open Sans, sans-serif' }}>Email *</label>
                        <input required name="email" type="email" placeholder="votre@email.com" className="w-full px-3 py-2.5 rounded-md border text-sm outline-none" style={{ borderColor: '#E5E7EB', color: '#2C3E50', fontFamily: 'Open Sans, sans-serif' }} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1.5" style={{ color: '#2C3E50', fontFamily: 'Open Sans, sans-serif' }}>Téléphone *</label>
                      <input required name="telephone" type="tel" placeholder="+221 77 000 00 00" className="w-full px-3 py-2.5 rounded-md border text-sm outline-none" style={{ borderColor: '#E5E7EB', color: '#2C3E50', fontFamily: 'Open Sans, sans-serif' }} />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium mb-1.5" style={{ color: '#2C3E50', fontFamily: 'Open Sans, sans-serif' }}>Type de rendez-vous *</label>
                        <select required name="type_rdv" className="w-full px-3 py-2.5 rounded-md border text-sm outline-none" style={{ borderColor: '#E5E7EB', color: '#2C3E50', fontFamily: 'Open Sans, sans-serif' }}>
                          <option value="">Choisir...</option>
                          <option>Visite d'un bien</option>
                          <option>Conseil immobilier</option>
                          <option>Mandat de gestion</option>
                          <option>Estimation de bien</option>
                          <option>Devis travaux</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-medium mb-1.5" style={{ color: '#2C3E50', fontFamily: 'Open Sans, sans-serif' }}>Date souhaitée *</label>
                        <input required name="date_souhaitee" type="date" className="w-full px-3 py-2.5 rounded-md border text-sm outline-none" style={{ borderColor: '#E5E7EB', color: '#2C3E50', fontFamily: 'Open Sans, sans-serif' }} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1.5 flex justify-between" style={{ color: '#2C3E50', fontFamily: 'Open Sans, sans-serif' }}>
                        <span>Précisions</span>
                        <span style={{ color: textLen > 500 ? '#E74C3C' : '#95A5A6' }}>{textLen}/500</span>
                      </label>
                      <textarea name="precisions" rows={4} placeholder="Précisez votre demande (bien visé, référence, questions...)" maxLength={500} onChange={(e) => setTextLen(e.target.value.length)} className="w-full px-3 py-2.5 rounded-md border text-sm outline-none resize-none" style={{ borderColor: '#E5E7EB', color: '#2C3E50', fontFamily: 'Open Sans, sans-serif' }} />
                    </div>
                    <button type="submit" disabled={submitting || textLen > 500} className="w-full py-3 rounded-md text-sm font-semibold text-white cursor-pointer whitespace-nowrap disabled:opacity-60" style={{ background: '#1F4E79', fontFamily: 'Poppins, sans-serif' }}>
                      {submitting ? 'Envoi en cours...' : 'Demander un rendez-vous'}
                    </button>
                  </form>
                )}

                {activeTab === 'devis' && (
                  <form data-readdy-form id="form-devis-xmt" onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="font-bold text-base mb-1" style={{ color: '#2C3E50', fontFamily: 'Poppins, sans-serif' }}>Demander un devis travaux</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium mb-1.5" style={{ color: '#2C3E50', fontFamily: 'Open Sans, sans-serif' }}>Nom complet *</label>
                        <input required name="nom" type="text" placeholder="Votre nom" className="w-full px-3 py-2.5 rounded-md border text-sm outline-none" style={{ borderColor: '#E5E7EB', color: '#2C3E50', fontFamily: 'Open Sans, sans-serif' }} />
                      </div>
                      <div>
                        <label className="block text-xs font-medium mb-1.5" style={{ color: '#2C3E50', fontFamily: 'Open Sans, sans-serif' }}>Email *</label>
                        <input required name="email" type="email" placeholder="votre@email.com" className="w-full px-3 py-2.5 rounded-md border text-sm outline-none" style={{ borderColor: '#E5E7EB', color: '#2C3E50', fontFamily: 'Open Sans, sans-serif' }} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1.5" style={{ color: '#2C3E50', fontFamily: 'Open Sans, sans-serif' }}>Téléphone *</label>
                      <input required name="telephone" type="tel" placeholder="+221 77 000 00 00" className="w-full px-3 py-2.5 rounded-md border text-sm outline-none" style={{ borderColor: '#E5E7EB', color: '#2C3E50', fontFamily: 'Open Sans, sans-serif' }} />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium mb-1.5" style={{ color: '#2C3E50', fontFamily: 'Open Sans, sans-serif' }}>Type de travaux *</label>
                        <select required name="type_travaux" className="w-full px-3 py-2.5 rounded-md border text-sm outline-none" style={{ borderColor: '#E5E7EB', color: '#2C3E50', fontFamily: 'Open Sans, sans-serif' }}>
                          <option value="">Choisir...</option>
                          <option>Construction neuve</option>
                          <option>Rénovation</option>
                          <option>Plomberie</option>
                          <option>Électricité</option>
                          <option>Réseau / Télécoms</option>
                          <option>Climatisation</option>
                          <option>Autre</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-medium mb-1.5" style={{ color: '#2C3E50', fontFamily: 'Open Sans, sans-serif' }}>Budget estimé</label>
                        <select name="budget" className="w-full px-3 py-2.5 rounded-md border text-sm outline-none" style={{ borderColor: '#E5E7EB', color: '#2C3E50', fontFamily: 'Open Sans, sans-serif' }}>
                          <option>Non défini</option>
                          <option>Moins de 500 000 FCFA</option>
                          <option>500 000 – 2 000 000 FCFA</option>
                          <option>2 000 000 – 10 000 000 FCFA</option>
                          <option>Plus de 10 000 000 FCFA</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1.5" style={{ color: '#2C3E50', fontFamily: 'Open Sans, sans-serif' }}>Adresse du chantier</label>
                      <input name="adresse_chantier" type="text" placeholder="Quartier, ville..." className="w-full px-3 py-2.5 rounded-md border text-sm outline-none" style={{ borderColor: '#E5E7EB', color: '#2C3E50', fontFamily: 'Open Sans, sans-serif' }} />
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1.5 flex justify-between" style={{ color: '#2C3E50', fontFamily: 'Open Sans, sans-serif' }}>
                        <span>Description du projet *</span>
                        <span style={{ color: textLen > 500 ? '#E74C3C' : '#95A5A6' }}>{textLen}/500</span>
                      </label>
                      <textarea required name="description_projet" rows={4} placeholder="Décrivez vos travaux, superficie, matériaux souhaités..." maxLength={500} onChange={(e) => setTextLen(e.target.value.length)} className="w-full px-3 py-2.5 rounded-md border text-sm outline-none resize-none" style={{ borderColor: '#E5E7EB', color: '#2C3E50', fontFamily: 'Open Sans, sans-serif' }} />
                    </div>
                    <button type="submit" disabled={submitting || textLen > 500} className="w-full py-3 rounded-md text-sm font-semibold text-white cursor-pointer whitespace-nowrap disabled:opacity-60" style={{ background: '#F39C12', fontFamily: 'Poppins, sans-serif' }}>
                      {submitting ? 'Envoi en cours...' : 'Envoyer ma demande de devis'}
                    </button>
                  </form>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
