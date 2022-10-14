import Image from "next/image";

export default function Partners() {
  const partners = [
    {
      name: "Artoon",
      logo: "/assets/partners/Artoon.png",
    },
    {
      name: "collectcent",
      logo: "/assets/partners/collectcent.png",
    },
    {
      name: "affle",
      logo: "/assets/partners/affle.png",
    },
    {
      name: "inmobi",
      logo: "/assets/partners/inmobi.png",
    },
    {
      name: "Galak",
      logo: "/assets/partners/galak.png",
    },
    {
      name: "JumpRamp",
      logo: "/assets/partners/jump.png",
    },
  ];
  return (
    <div className="relative w-full pt-14 lg:pt-12 pl-4 lg:pl-28">
      <span className="text-3xl font-bold text-[#28334E]">
        Our Top Partners
      </span>
      <div className="mt-4 grid grid-cols-2 lg:grid-cols-3 gap-x-8 w-[96%] lg:w-5/12">
        {partners.map((partner, key) => (
          <Image
            key={key}
            src={partner.logo}
            width="187px"
            height="169px"
            alt={partner.name}
          />
        ))}
      </div>
    </div>
  );
}
