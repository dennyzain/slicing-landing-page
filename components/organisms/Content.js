import DeffinitionTestiSection from '@components/molecules/DeffinitionTestiSection';
import HelpTipsSection from '@components/molecules/HelpTipsSection';
import HeroSection from '@components/molecules/HeroSection';
import PovResourceSection from '@components/molecules/PovResourceSection';
import QuoteSection from '@components/molecules/QuoteSection';

export default function Content({ data }) {
  return (
    <>
      <div className="bg-no-repeat bg-[#EEBECE] bg-hero-black bg-top">
        <HeroSection />
        <DeffinitionTestiSection data={data[0]} />
      </div>
      <PovResourceSection />
      <HelpTipsSection data={data[1]} />
      <QuoteSection />
    </>
  );
}
