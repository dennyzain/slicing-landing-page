import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <header>
        {/* the width not same */}
        <nav className="flex flex-row w-full p-4 bg-white">
          <Image src="/logo_navbar.svg" width={33} height={33} alt="logo navbar" />
          <div className="ml-3">
            <p>
              <span className="text-sm">Good Morning</span>
              <br />
              <span className="font-bold">Fellas</span>
            </p>
          </div>
        </nav>
      </header>
      <main>
        <section>
          <div className="mt-4">
            <h1 className="font-black text-5xl">WEEKEND FROM HOME</h1>
            <p className="leading-3 italic">stay active with a little workout.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
