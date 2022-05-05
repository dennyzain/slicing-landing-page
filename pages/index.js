import Image from 'next/image';

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
                <div className="bg-white p-5">
                  <h4 className="font-black text-[32px]">Blu Kicks</h4>
                  <p className="text-xs leading-[14px]">Places where you can leverage tools and software to free up time to focus on growing the business.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-black h-screen" />
      </main>
    </div>
  );
}
