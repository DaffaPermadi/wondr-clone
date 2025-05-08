import Image from "next/image";

async function getPromo(slug) {
  const slugParam = slug;
  const res = await fetch(`http://localhost:3000/api/promo/${slugParam}`);
  return res.json();
}

export default async function Post({ params }) {
  const { slug } = params;
  const promoData = await getPromo(slug);

  return (
    <div className="mt-5 text-black h-100% w-100% container gap-x-3.5 ml-4">
      <div className="flex flex-col items-center justify-center text-center">
        <Image
          class="w-[30%] h-[30%] object-cover"
          width={240}
          height={100}
          src={promoData?.image}
          alt=""
        />
      </div>
      <div className="container px-40 mt-5">
        <h1 className="text-3xl font-bold">{promoData?.title}</h1>
        <div className="flex justify-between">
          <p className="text-2xl">{promoData?.merchant}</p>
          <p className="text-2xl">{promoData?.valid_until}</p>
        </div>
        <p>{promoData?.description}</p>
        <p className="text-2xl mt-5">Syarat dan Ketentuan</p>
        <p>{promoData?.terms}</p>
      </div>
    </div>
  );
}
