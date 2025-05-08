import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  async function getPromos() {
    const res = await fetch("http://localhost:3000/api/promo");
    return res.json();
  }

  const promo = await getPromos();
  console.log(promo);

  return (
    <>
      {/* ga jadi dari gpt */}
      <div className="bg-white mt-10 h-100% flex flex-col items-center justify-center text-center px-4 text-black">
        {/* Logo + Headline */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          
          <Image
            src="/wondr-logo.png"
            alt="Wondr Logo"
            width={580}
            height={160}
          />
          <h1 className="text-4xl md:text-5xl font-semibold">jadiin maumu</h1>
        </div>

        {/* Subheadline */}
        <p className="mt-6 text-lg md:text-xl max-w-xl">
          Banking app untuk transaksi, dapetin insight, dan rencanain life
          goals-mu. Download sekarang!
        </p>

        {/* Download Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="#"
            className="flex items-center justify-center px-6 py-3 border border-black rounded-full text-sm hover:bg-black hover:text-white transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 384 512"
            >
              <path d="M318.7 268.6c-3.5-55.3 45.3-81.7 47.4-83.1-26-37.9-66.5-43.1-80.9-43.5-34.4-3.5-67 20.2-84.3 20.2-17.3 0-44.1-19.7-72.4-19.2-37.3.5-71.9 21.6-91.3 54.8-39 67.5-10 167.3 27.9 222.1 18.5 26.7 40.5 56.6 69.4 55.4 27.6-1.1 38.1-17.9 71.6-17.9s42.5 17.9 71.6 17.4c29.5-.5 48.2-27.1 66.3-53.9 20.9-30.4 29.5-59.9 30-61.5-.6-.3-57.4-22-58-87.3zM252.4 83.6c15.4-18.7 25.9-44.7 23-70.6-22.2.9-49.1 14.8-64.8 33.5-14.2 16.5-26.6 43-23.2 68.3 24.6 1.9 49.6-12.5 65-31.2z" />
            </svg>
            Download di App Store
          </a>
          <a
            href="#"
            className="flex items-center justify-center px-6 py-3 border border-black rounded-full text-sm hover:bg-black hover:text-white transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path d="M325.3 234.3L104.7 57.6C97.6 52 88 57.1 88 65.6v380.7c0 8.6 9.6 13.6 16.7 8l220.6-176.7c5.5-4.4 5.5-12.8 0-17.3zM361.4 303.2L308 256l53.4-47.2c5-4.4 12.6-.8 12.6 5.9v82.6c0 6.7-7.6 10.3-12.6 5.9zM408 364.6l-28.9-23.2v-170.7l28.9-23.2c7.5-6 18.6-.5 18.6 9v198.1c0 9.5-11.1 15-18.6 9z" />
            </svg>
            Download di Google Play
          </a>
        </div>
        <div className="bg-blue-700 w-screen h-[500px] mt-4 pt-5 flex flex-col p-20 justify-between">
          <div class="flex items-center justify-between " id="headingPromo">
            <h2 class="text-white text-[40px] leading-[48px] md:text-[80px] font-demibold md:leading-[88px] w-32 md:w-auto w-[60%] md:w-auto">
              Makin seru pakai promo
            </h2>
            <a
              href="https://bniexperience.bni.co.id/wondr?utm_source=microsite&amp;#x26;utm_medium=home_promo&amp;#x26;utm_campaign=wondr&amp;#x26;utm_term=selengkapnya&amp;#x26;utm_content=selengkapnya"
              class="font-demibold text-white text-[16px] leading-[24px] md:text-[24px] md:leading-[32px] underline tracking-[-0.0225em] btn-all-promo "
              id="btnAllPromo"
            >
              Lihat semuanya
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
            {promo.map((item) => (
              <Link href={`/post/${item.slug}`} key={item.id}>
                <div className="rounded-lg overflow-hidden shadow-md bg-white">
                  <div className="relative h-48 w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2 line-clamp-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-3">{item.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
