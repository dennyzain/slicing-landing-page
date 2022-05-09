import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="bg-hero-blue-path bg-no-repeat bg-blue-path-pos-sm pt-[134px] pb-[20px] text-center xl:bg-blue-path-pos-xl xl:pt-[151px] xl:pb-[149px]">
      <div className="bg-hero-pink-path bg-no-repeat bg-pink-path-pos-xl">
        <div className="bg-hero-oval-path bg-no-repeat bg-blue-oval-pos-sm xl:bg-blue-oval-pos-xl">
          <h1 className="leading-[51px] font-black text-[52px] text-white mx-[23px] lg:mx-[100px] xl:mx-[322.5px] xl:text-[62px]">WEEKEND FROM HOME</h1>
          <p className="leading-[19px] italic mt-5 text-base text-white xl:text-[21px] xl:leading-[25px]">stay active with a little workout.</p>
          <div className="relative flex flex-col justify-center-center mt-[67px] mx-auto">
            <Image src="/bitmap.svg" priority objectFit="initial" width={184} height={305} />
            <button
              type="button"
              className="button-absolute py-[20px] px-[84px] text-center rounded-full whitespace-nowrap bg-white animate-hover"
            >
              Let&apos;s Go
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
