export default function Follwing() {
  const following_info = [
    {
      num: "300+",
      content: "Affiliates",
    },
    {
      num: "5K+",
      content: "Apps Inventory",
    },
    {
      num: "1M+",
      content: "App Installs",
    },
    {
      num: "3K+",
      content: "Active Campaigns",
    },
  ];
  return (
    <div className="relative">
      <span>
        <img
          alt="following_bg"
          className="w-full h-72 md:h-auto object-cover object-left mt-[19rem] lg:mt-0"
          src="assets/following_bg.png"
        />
      </span>
      <div className="absolute top-0 z-20 text-white grid grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-6 pt-16 text-center p-0 lg:pl-24 place-items-center w-full lg:w-auto">
        {following_info.map((value, key) => (
          <div key={key}>
            <span className="text-4xl font-medium">{value.num}</span>
            <br />
            <span className="text-sm lg:text-base">{value.content}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
