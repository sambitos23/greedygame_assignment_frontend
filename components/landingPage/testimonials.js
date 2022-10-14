import Image from "next/image";

export default function Testimonials() {
  return (
    <div className="relative mb-16">
      <div className="w-full lg:w-auto pt-14 lg:pt-12 pl-4 lg:pl-28">
        <span className="text-3xl font-bold text-[#28334E]">
          Hear it from Clients
        </span>
        <div className="shadow-lg w-[96%] lg:w-[43%] rounded-lg p-8 bg-white mt-8 text-sm">
          <div className="w-[20%]">
            <Image
              src="/assets/clients/Dream11.png"
              width="169px"
              height="51px"
              alt="Dream11"
            />
          </div>
          <div className="font-bold py-2 text-[15px]">
            22.4 Mn minutes of branding results in 25k high-quality
            registrations
          </div>
          <span className="text-xs">
            The placement of clickable units natively placed on the main menu,
            gameplay screen and pause screen ensured high engagement,
            registrations and transactions.
          </span>
          <div className="text-[#126FED] mt-3 font-semibold">
            Read Casestudy
          </div>
        </div>
      </div>
      <div className="absolute top-0 pl-10 -z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="303.709"
          height="265.746"
          viewBox="0 0 303.709 265.746"
          className="w-9/12"
        >
          <path
            id="Icon_awesome-quote-left"
            data-name="Icon awesome-quote-left"
            d="M275.236,135.123H227.782V97.159A38,38,0,0,1,265.746,59.2h4.745a14.2,14.2,0,0,0,14.236-14.236V16.486A14.2,14.2,0,0,0,270.491,2.25h-4.745a94.883,94.883,0,0,0-94.909,94.909V239.523A28.48,28.48,0,0,0,199.309,268h75.927a28.48,28.48,0,0,0,28.473-28.473V163.6A28.48,28.48,0,0,0,275.236,135.123Zm-170.836,0H56.945V97.159A38,38,0,0,1,94.909,59.2h4.745a14.2,14.2,0,0,0,14.236-14.236V16.486A14.2,14.2,0,0,0,99.655,2.25H94.909A94.883,94.883,0,0,0,0,97.159V239.523A28.48,28.48,0,0,0,28.473,268H104.4a28.48,28.48,0,0,0,28.473-28.473V163.6A28.48,28.48,0,0,0,104.4,135.123Z"
            transform="translate(0 -2.25)"
            fill="#a4bfde"
            opacity="0.141"
          />
        </svg>
      </div>
    </div>
  );
}
