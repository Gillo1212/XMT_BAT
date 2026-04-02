import { useRef } from 'react';
import SiteLayout from '../../../components/site/SiteLayout';
import CatalogueHero from './components/CatalogueHero';
import CatalogueRubriqueSection from './components/CatalogueRubriqueSection';
import { mockCatalogue, mockCatalogueInfo } from '../../../mocks/catalogue';

const LOGO_URL = 'https://storage.readdy-site.link/project_files/23941d3d-9a18-41cf-ae5d-fa1b92b52dad/33e904ea-19a6-45dc-be29-6d2cb3be6b79_WhatsApp-Image-2026-03-25-at-08.57.54.jpeg?v=eef4cad0d00bcc103d78cc3a6f3c4bec';

const totalItems = mockCatalogue.reduce((sum, r) => sum + r.items.length, 0);

export default function CataloguePage() {
  const printRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = () => {
    const printContent = document.getElementById('catalogue-print-area');
    if (!printContent) return;

    const printWindow = window.open('', '_blank', 'width=900,height=700');
    if (!printWindow) return;

    const styles = Array.from(document.styleSheets)
      .map((sheet) => {
        try {
          return Array.from(sheet.cssRules).map((rule) => rule.cssText).join('\n');
        } catch {
          return '';
        }
      })
      .join('\n');

    printWindow.document.write(`
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8" />
        <title>Catalogue XMT GROUPE ${mockCatalogueInfo.annee}</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;900&family=Open+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com"></script>
        <style>
          ${styles}
          @page { margin: 15mm; size: A4; }
          body { font-family: 'Open Sans', sans-serif; background: white; }
          .print-header { background: linear-gradient(135deg, #0B1929, #1F4E79); padding: 24px 32px; display: flex; align-items: center; justify-content: space-between; border-radius: 12px; margin-bottom: 24px; }
          .print-rubrique { margin-bottom: 32px; page-break-inside: avoid; }
          .print-rubrique-header { display: flex; align-items: center; gap: 12px; padding: 12px 20px; border-radius: 10px; margin-bottom: 16px; }
          .print-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .print-card { border: 1px solid #E2E8F0; border-radius: 12px; overflow: hidden; page-break-inside: avoid; }
          .print-card img { width: 100%; height: 160px; object-fit: cover; object-position: top; }
          .print-card-body { padding: 14px; }
          .print-card-title { font-family: Poppins, sans-serif; font-weight: 700; font-size: 14px; margin-bottom: 6px; color: #1A2B3C; }
          .print-card-desc { font-size: 12px; color: #64748B; line-height: 1.5; margin-bottom: 10px; }
          .print-card-detail { font-size: 11px; color: #4A5568; display: flex; align-items: flex-start; gap: 6px; margin-bottom: 4px; }
          .print-check { color: #22C55E; font-weight: bold; }
          .print-footer { text-align: center; padding: 16px; border-top: 1px solid #E2E8F0; color: #94A3B8; font-size: 11px; margin-top: 24px; }
          @media print { body { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }
        </style>
      </head>
      <body>
        <div class="print-header">
          <div style="display:flex;align-items:center;gap:14px;">
            <img src="${LOGO_URL}" style="width:52px;height:52px;border-radius:10px;object-fit:cover;" alt="XMT GROUPE" />
            <div>
              <div style="font-family:Poppins,sans-serif;font-weight:900;font-size:20px;color:white;letter-spacing:0.15em;">XMT GROUPE</div>
              <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:0.12em;margin-top:3px;">IMMOBILIER · TRAVAUX · SERVICES</div>
            </div>
          </div>
          <div style="text-align:right;">
            <div style="font-family:Poppins,sans-serif;font-weight:800;font-size:15px;color:#F39C12;">Catalogue ${mockCatalogueInfo.annee}</div>
            <div style="font-size:11px;color:rgba(255,255,255,0.5);margin-top:4px;">${mockCatalogueInfo.contact}</div>
          </div>
        </div>

        ${mockCatalogue.map((rubrique) => `
          <div class="print-rubrique">
            <div class="print-rubrique-header" style="background:${rubrique.couleur}15;">
              <div style="width:36px;height:36px;background:${rubrique.couleur};border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                <i class="${rubrique.icone}" style="color:white;font-size:16px;"></i>
              </div>
              <div>
                <div style="font-family:Poppins,sans-serif;font-weight:800;font-size:15px;color:${rubrique.couleur};">${rubrique.titre}</div>
                <div style="font-size:11px;color:#64748B;margin-top:2px;">${rubrique.description}</div>
              </div>
            </div>
            <div class="print-grid">
              ${rubrique.items.map((item) => `
                <div class="print-card">
                  <img src="${item.image}" alt="${item.nom}" />
                  <div class="print-card-body">
                    <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;margin-bottom:6px;">
                      <div class="print-card-title">${item.nom}</div>
                      ${item.badge ? `<span style="background:${rubrique.couleur};color:white;font-size:9px;padding:2px 8px;border-radius:999px;font-weight:700;white-space:nowrap;">${item.badge}</span>` : ''}
                    </div>
                    <div class="print-card-desc">${item.description}</div>
                    ${item.details.map((d) => `
                      <div class="print-card-detail"><span class="print-check">✓</span><span>${d}</span></div>
                    `).join('')}
                    ${item.prix ? `<div style="font-size:11px;color:${rubrique.couleur};font-weight:700;margin-top:8px;">${item.prix}</div>` : ''}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}

        <div class="print-footer">
          XMT GROUPE — ${mockCatalogueInfo.adresse} — ${mockCatalogueInfo.contact} — Catalogue ${mockCatalogueInfo.annee}
        </div>
        <script>
          window.addEventListener('load', function() { window.print(); window.close(); });
        </script>
      </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <SiteLayout>
      {/* Hero section */}
      <CatalogueHero
        onDownload={handleDownloadPDF}
        totalItems={totalItems}
        totalRubriques={mockCatalogue.length}
      />

      {/* Main content */}
      <div
        id="catalogue-print-area"
        ref={printRef}
        className="max-w-6xl mx-auto px-8 py-12"
        style={{ minHeight: '60vh' }}
      >
        {/* Search bar + filter */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <div>
            <h2
              className="font-black text-2xl"
              style={{ color: '#1A2B3C', fontFamily: 'Poppins, sans-serif' }}
            >
              Nos Rubriques
            </h2>
            <p className="text-sm mt-1" style={{ color: '#94A3B8', fontFamily: 'Open Sans, sans-serif' }}>
              Cliquez sur une rubrique pour la déplier et découvrir toutes les prestations
            </p>
          </div>

          <button
            onClick={handleDownloadPDF}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90 cursor-pointer whitespace-nowrap"
            style={{
              background: 'linear-gradient(135deg, #1F4E79, #2E7D32)',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            <i className="ri-download-2-line" />
            Télécharger PDF
          </button>
        </div>

        {/* Rubriques accordion */}
        <div className="flex flex-col gap-4">
          {mockCatalogue.map((rubrique, index) => (
            <CatalogueRubriqueSection
              key={rubrique.id}
              rubrique={rubrique}
              defaultOpen={index === 0}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-14 rounded-2xl p-10 text-center"
          style={{
            background: 'linear-gradient(135deg, #0B1929 0%, #1F4E79 100%)',
          }}
        >
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
            style={{ background: 'rgba(243,156,18,0.15)', border: '1px solid rgba(243,156,18,0.25)' }}
          >
            <i className="ri-customer-service-2-line text-2xl" style={{ color: '#F39C12' }} />
          </div>
          <h3
            className="text-2xl font-black text-white mb-3"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Une question sur nos prestations ?
          </h3>
          <p className="text-sm mb-7" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Open Sans, sans-serif' }}>
            Notre équipe vous répond rapidement et établit un devis personnalisé adapté à votre projet.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="/site/contact"
              className="px-7 py-3 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90 cursor-pointer whitespace-nowrap"
              style={{ background: '#F39C12', fontFamily: 'Poppins, sans-serif' }}
            >
              Demander un devis gratuit
            </a>
            <a
              href="https://wa.me/221771234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold cursor-pointer whitespace-nowrap transition-all hover:opacity-90"
              style={{ background: 'rgba(37,211,102,0.12)', color: '#25D366', border: '1px solid rgba(37,211,102,0.2)', fontFamily: 'Poppins, sans-serif' }}
            >
              <i className="ri-whatsapp-line" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
