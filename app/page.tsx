import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";

function Hero() {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div>
          <h1 className="text-4xl text-center text-primary md:text-5xl lg:text-6xl font-bold">
            <Link href="/">ChallanEase</Link>
          </h1>
        </div>
        <div className="mt-6 flex flex-col md:flex-row items-center md:items-start">
          <div className="w-full md:w-1/2 p-4">
            <Image
              src="/police_05-removebg-preview.png"
              alt="Police"
              className="w-full h-auto object-cover"
              width={500}
              height={500}
            />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-lg md:text-xl lg:text-2xl lg:mt-28 font-semibold">
              A challan is issued by traffic police to a driver or vehicle owner
              for offenses like speeding, improper parking, jumping signals,
              etc. It details the offense, fine amount, and often includes
              information on where and how to pay the fine.
            </h2>
            <Link href="/login">
              <button className="mt-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-[100px]">
                Begin Your Journey
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Hero;
