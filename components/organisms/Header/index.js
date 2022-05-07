import Image from 'next/image';

export default function Header() {
  return (
    <header>
      <nav className="flex flex-row w-full px-[23px] py-[17px] bg-white lg:px-[70px] xl:px-[213px]">
        <Image src="/logo_navbar.svg" width={33} height={33} alt="logo navbar" />
        <div className="ml-3 ">
          <p className="leading-[14px] -mt-1">
            <span className="text-sm">Good Morning</span>
            <br />
            <span className="font-bold">Fellas</span>
          </p>
        </div>
      </nav>
    </header>
  );
}
