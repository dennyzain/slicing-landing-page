import DeffinitionTestiSection from '@components/molecules/DeffinitionTestiSection';
import HelpTipsSection from '@components/molecules/HelpTipsSection';
import HeroSection from '@components/molecules/HeroSection';
import PovResourceSection from '@components/molecules/PovResourceSection';
import QuoteSection from '@components/molecules/QuoteSection';

export default function Content({ data }) {
  return (
    <>
      <HeroSection />
      <DeffinitionTestiSection data={data[0]} />
      <PovResourceSection />
      <HelpTipsSection data={data[1]} />
      <QuoteSection />
    </>
  );
}
