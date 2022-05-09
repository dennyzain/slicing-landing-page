import react, { useCallback } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardTypography from '@components/atoms/CardTypography';
import 'swiper/css';
import { HiArrowSmLeft, HiArrowSmRight } from 'react-icons/hi';

export default function DeffinitionTestiSection({ data }) {
  const sliderRef = react.useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

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
        <div className="px-[32px] xl:px-[315.5px]">
          <p className="leading-[24px] text-right text-base xl:text-[21px] xl:leading-[32px]">
            <span className="text-[#0B24FB] font-bold text-base ">Deffinition;</span>
            {' '}
            span a
            practice or exercise to test or improve one&apos;s fitness for athletic competition,
            ability, or performance to exhaust (something, such as a mine) by working to devise,
            arrange, or achieve by resolving difficulties. Merriam-Webster.com Dictionary.
            <br />
            <span className="font-semibold italic inline-block text-white mt-[20px] xl:mt-[30px]">
              -weekend team
            </span>
          </p>
          <h3 className="font-black text-[32px] leading-[37.5px] mt-[107px] mb-[30px] text-white xl:text-center">
            Testimonial
          </h3>
          <div className="flex flex-row items-center relative -mb-[96px] justify-around">
            <button type="button" onClick={handlePrev} className="bg-white p-[7.5px] mr-[25px] rounded-full hidden md:block">
              <HiArrowSmLeft color="#0B24FB" size={17} />
            </button>
            <Swiper
              ref={sliderRef}
              spaceBetween={10}
              slidesPerView="auto"
              mousewheel={{
                forceToAxis: true,
                sensitivity: 1,
                releaseOnEdges: true,
              }}
              className="w-[621px]"
            >
              {data.map((item) => (
                <SwiperSlide key={item.id} className="max-w-[247px]">
                  <CardTypography username={item.by} feedback={item.testimony} />
                </SwiperSlide>
              ))}
            </Swiper>
            <button type="button" onClick={handleNext} className="bg-white p-[7.5px] ml-[25px] rounded-full animate-hover hidden md:block">
              <HiArrowSmRight color="#0B24FB" fontSize={17} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
