import Image from 'next/image';

export default function QuoteSection() {
  return (
    <section>
      <div className="pt-[67px] pb-[100px] px-[32px] bg-black xl:relative xl:pb-[167px]">
        <div className="flex flex-col xl:mx-auto ">
          <h3 className="font-black text-[32px] text-white xl:text-center">You’re all set.</h3>
          <p className="text-white leading-[24px] font-normal mt-[30px] mb-[67px] xl:text-center xl:text-[18px]">The wise man therefore always holds in these matters to this principle of selection.</p>
        </div>
        <div className="xl:absolute xl:top-0 xl:mt-[67px]">
          <Image src="/bitmap.svg" objectPosition="right" objectFit="contain" width={142} height={236} className="rotate-180" />
        </div>
      </div>
    </section>
  );
}
