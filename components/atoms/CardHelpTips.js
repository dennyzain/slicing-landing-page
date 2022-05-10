import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

export default function CardHelpTips({ title, image }) {
  return (
    <div className="relative mt-[10px] max-w-[311px] max-h-[175px]">
      <Image
        src={image}
        blurDataURL={image}
        placeholder="blur"
        objectFit="contain"
        width={311}
        height={176}
        className="animate-hover"
      />
      <div className="flex flex-row pl-[25px] py-[17px] text-white bg-black bg-opacity-50 absolute -bottom-[1px]">
        <p className="font-bold leading-[19px] self-center">{title}</p>
        <button type="button" className="px-[11px] h-[32px] bg-white mr-5 rounded-full animate-hover self-center">
          {' '}
          <FontAwesomeIcon icon={faArrowRight} size="xs" color="#0B24FB" />
          {' '}
        </button>
      </div>
    </div>
  );
}
