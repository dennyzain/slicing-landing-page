import DeffinitionSection from '../molecules/DeffinitionSection';
import HelpTipsSection from '../molecules/HelpTipsSection';
import HeroSection from '../molecules/HeroSection';
import PovResourceSection from '../molecules/PovResourceSection';
import QuoteSection from '../molecules/QuoteSection';

export default function Content() {
  return (
    <>
      <HeroSection />
      <DeffinitionSection />
      <PovResourceSection />
      <HelpTipsSection />
      <QuoteSection />
    </>
  );
}
