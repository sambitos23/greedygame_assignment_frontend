import Image from "next/image";

export default function Clients() {
  const clients = [
    {
      name: "Dream11",
      logo: "/assets/clients/Dream11.png",
    },
    {
      name: "inmobi",
      logo: "/assets/clients/inmobi.png",
    },
    {
      name: "rummy_circle",
      logo: "/assets/clients/rummy.png",
    },
  ];
  return (
    <>
      <div className="relative bg-[#F7F9FC] lg:mt-6 w-full">
        <span>
          <img
            alt="following_bg"
            className="w-full h-72 md:h-auto object-cover object-right"
            src="assets/clients/client_bg.svg"
          />
        </span>

        <div className="absolute left-0 top-0 z-20 w-full lg:w-auto pt-14 lg:pt-12 pl-4 lg:pl-28">
          <span className="text-3xl font-bold text-[#28334E]">
            Our Top Clients
          </span>
          <div className="mt-8 lg:mt-16 grid grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-8 w-[90%] lg:w-10/12">
            {clients.map((client, key) => (
              <Image
                key={key}
                src={client.logo}
                width="169px"
                height="51px"
                alt={client.name}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
