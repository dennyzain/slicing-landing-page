import Image from 'next/image';
import CardHelpTips from '../../molecules/CardHelpTips';
import CardTypography from '../../molecules/CardTypography';

export default function Main() {
  return (
    <main>
      <section>
        <div className="pt-[67px] pb-[20px] text-center bg-[#eeeeee] xl:pt-[84px] xl:pb-[149px]">
          <h1 className="leading-[51px] font-black text-[52px] mx-[23px] lg:mx-[100px] xl:mx-[322.5px] xl:text-[62px]">WEEKEND FROM HOME</h1>
          <p className="leading-[19px] italic mt-5 text-base xl:text-[21px] xl:leading-[25px]">stay active with a little workout.</p>
          <div className="relative flex flex-col justify-center-center mt-[67px] mx-auto">
            <Image src="/bitmap.svg" objectFit="initial" width={184} height={305} />
            <button
              type="button"
              className="button-absolute py-[20px] px-[84px] text-center rounded-full whitespace-nowrap bg-white"
            >
              Let&apos;s Go
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="w-screen flex flex-col bg-[#aaaaaa]">
          <div className="flex justify-end w-full my-[31.5px] pr-[0.5px]">
            <Image
              src="/bitmap.svg"
              objectFit="contain"
              objectPosition="right"
              width={158}
              height={158}
              className="-rotate-90"
            />
          </div>
          <div className="px-[32px] xl:px-[373.5px]">
            <p className="leading-[24px] text-right text-base xl:text-[21px] xl:leading-[32px]">
              <span className="text-[#0B24FB] font-bold text-base ">Deffinition;</span>
              {' '}
              span a practice or exercise to test or improve one&apos;s fitness
              for athletic competition, ability, or performance to exhaust (something, such as a
              mine) by working to devise, arrange, or achieve by resolving difficulties.
              Merriam-Webster.com Dictionary.
              <br />
              <span className="font-semibold italic inline-block text-white mt-[20px] xl:mt-[30px]">-weekend team</span>
            </p>
            <h3 className="font-black text-[32px] mt-[107px] mb-[30px] text-white xl:text-center">Testimonial</h3>
            <div className="flex -mb-[100px] justify-between xl:max-w-[621px] xl:relative">
              <CardTypography />
              <CardTypography />
              <CardTypography />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="px-[32px] pt-[162px] bg-black h-auto xl:px-[373.5px] ">
          <h3 className="font-black text-[32px] text-white xl:text-center">POV</h3>
          <p className="text-white leading-[24px] font-normal mt-[30px] text-base xl:text-[18px] xl:leading-[27px] xl:text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
          <h3 className="font-black text-[32px] pt-[67px] text-white xl:text-center">RESOURCE</h3>
          <p className="text-white leading-[24px] font-normal mt-[30px] text-base xl:text-[18px] xl:leading-[27px] xl:text-center">These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best</p>
        </div>
      </section>
      <section>
        <div className="pt-[67px] px-[32px] bg-black h-auto xl:px-0">
          <h3 className="font-black text-[32px] text-white xl:text-center xl:leading-[38px]">Help & Tips</h3>
          <div className="flex flex-col mt-[20px] items-center lg:flex-row lg:justify-between lg:box-content lg:max-w-[954px] xl:mx-[206px] 2xl:mx-auto">
            <CardHelpTips />
            <CardHelpTips />
            <CardHelpTips />
          </div>
        </div>
      </section>
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
    </main>
  );
}
