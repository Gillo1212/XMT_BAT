import SiteLayout from '../../../components/site/SiteLayout';
import HeroSection from './components/HeroSection';
import PilarsSection from './components/PilarsSection';
import BiensVedette from './components/BiensVedette';
import TemoignagesSection from './components/TemoignagesSection';
import CTABanner from './components/CTABanner';

export default function AccueilPage() {
  return (
    <SiteLayout>
      <HeroSection />
      <PilarsSection />
      <BiensVedette />
      <TemoignagesSection />
      <CTABanner />
    </SiteLayout>
  );
}
