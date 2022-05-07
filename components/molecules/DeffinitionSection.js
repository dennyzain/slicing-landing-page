import Image from 'next/image';
import CardTypography from '../atoms/CardTypography';

export default function DeffinitionSection() {
  return (
    <section>
      <div className="w-screen flex flex-col bg-[#EEBECE]">
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
          <h3 className="font-black text-[32px] leading-[37.5px] mt-[107px] mb-[30px] text-white xl:text-center">Testimonial</h3>
          <div className="flex -mb-[100px] justify-between xl:max-w-[621px] xl:relative">
            <CardTypography />
            <CardTypography />
            <CardTypography />
          </div>
        </div>
      </div>
    </section>
  );
}
