import Image from 'next/image';
import CardHelpTips from '../components/molecules/CardHelpTips';
import CardTypography from '../components/molecules/CardTypography';

export default function Home() {
  return (
    <div>
      <header>
        {/* the width not same */}
        <nav className="flex flex-row w-full px-[23px] py-[17px] bg-white">
          <Image src="/logo_navbar.svg" width={33} height={33} alt="logo navbar" />
          <div className="ml-3">
            {/* cek lagi nih anjeng */}
            <p className="leading-[14px]">
              <span className="text-sm">Good Morning</span>
              <br />
              <span className="font-bold">Fellas</span>
            </p>
          </div>
        </nav>
      </header>
      <main>
        <section>
          <div className="pt-[67px] pb-7 text-center bg-[#eeeeee]">
            {/* di ukuran paling kecil susah tulisannya mengkerut */}
            <h1 className="leading-[51px] font-black text-5xl mx-6">WEEKEND FROM HOME</h1>
            <p className="leading-3 italic mt-5">stay active with a little workout.</p>
            <div className="relative flex flex-col justify-center mt-24 mx-auto">
              <Image src="/bitmap.svg" objectFit="contain" width={184} height={305} />
              <button
                type="button"
                className="button-absolute text-center rounded-full whitespace-nowrap bg-white"
              >
                Let&apos;s Go
              </button>
            </div>
          </div>
        </section>
        <section>
          <div className="w-screen flex flex-col bg-[#aaaaaa]">
            <Image
              src="/bitmap.svg"
              objectFit="contain"
              width={95}
              height={158}
              className="-rotate-90 right-0"
            />
            <div className="px-[32px]">
              <p className="leading-[24px] text-right">
                <span className="text-[#0B24FB] font-bold text-base">Deffinition;</span>
                {' '}
                span a practice or exercise to test or improve one&apos;s fitness
                for athletic competition, ability, or performance to exhaust (something, such as a
                mine) by working to devise, arrange, or achieve by resolving difficulties.
                Merriam-Webster.com Dictionary.
                <br />
                <span className="font-semibold italic">-weekend team</span>
              </p>
              <h3 className="font-black text-[32px] text-white">Testimonial</h3>
              <div className="flex -mb-16">
                <CardTypography />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="px-[32px] pt-[162px] bg-black h-auto">
            <h3 className="font-black text-[32px] text-white">POV</h3>
            <p className="text-white leading-[24px] font-normal mt-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            <h3 className="font-black text-[32px] pt-[67px] text-white">RESOURCE</h3>
            <p className="text-white leading-[24px] font-normal mt-[30px]">These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best</p>
          </div>
        </section>
        <section>
          <div className="pt-[67px] px-[32px] bg-black h-screen">
            <h3 className="font-black text-[32px] text-white">Help & Tips</h3>
            <div className="flex flex-col mt-[30px]">
              <CardHelpTips />
              <CardHelpTips />
              <CardHelpTips />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
