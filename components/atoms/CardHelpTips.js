import Image from 'next/image';
import { HiArrowSmRight } from 'react-icons/hi';

export default function CardHelpTips({ title, image }) {
  return (
    <div className="relative mt-[10px] max-w-[311px]">
      <Image src={image} blurDataURL={image} placeholder="blur" objectFit="contain" width={311} height={176} />
      <div className="flex flex-row pl-[25px] py-[17px] text-white bg-black bg-opacity-50 absolute bottom-0">
        <p className="font-bold leading-[19px] self-center">{title}</p>
        <button type="button" className="bg-white p-[11px] mr-5 rounded-full">
          {' '}
          <HiArrowSmRight color="#0B24FB" size={21} />
          {' '}
        </button>
      </div>
    </div>
  );
}
