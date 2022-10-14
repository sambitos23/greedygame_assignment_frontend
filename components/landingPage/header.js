export default function Header() {
  return (
    <>
      <div className="z-30 fixed w-full backdrop-blur-lg bg-opacity-40 shadow-sm bg-white flex items-center lg:px-12 px-6 lg:py-6 py-8">
        <div className="pr-1 md:hidden">
          {/* hamburger menu svg */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="21"
            viewBox="0 0 30 21"
            className="w-7/12"
          >
            <g transform="translate(-3 -7.5)">
              <path
                d="M4.5,18h27"
                fill="none"
                stroke="#28334E"
                strokeLinejoin="round"
                strokeWidth="3"
              />
              <path
                d="M4.5,9h27"
                fill="none"
                stroke="#28334E"
                strokeLinejoin="round"
                strokeWidth="3"
              />
              <path
                d="M4.5,27h27"
                fill="none"
                stroke="#28334E"
                strokeLinejoin="round"
                strokeWidth="3"
              />
            </g>
          </svg>
        </div>
        <div>
          {/* Logo SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="194.153"
            height="25.229"
            viewBox="0 0 194.153 25.229"
            className="w-7/12 md:w-full"
          >
            <g
              id="Group_7463"
              data-name="Group 7463"
              transform="translate(-39.06 -133)"
            >
              <path
                id="Path_1181"
                data-name="Path 1181"
                d="M27.673-81.463,23.65-87.229a5.831,5.831,0,0,0,3.69-5.663c0-4.023-3-6.509-7.79-6.509H11.786v17.937h4.151v-5h3.818l3.459,5ZM23.138-92.891c0,1.947-1.281,3.126-3.818,3.126H15.937v-6.252H19.32C21.856-96.018,23.138-94.865,23.138-92.891Zm11.608,8.1v-4.151h8.328v-3.229H34.745v-3.895h9.43V-99.4H30.62v17.937H44.508v-3.331Zm17.194,0v-4.151h8.328v-3.229H51.939v-3.895h9.43V-99.4H47.814v17.937H61.7v-3.331Zm13.068,3.331h8.148c5.868,0,9.891-3.536,9.891-8.968S79.024-99.4,73.156-99.4H65.007Zm4.151-3.408V-95.992h3.792c3.562,0,5.894,2.127,5.894,5.56s-2.332,5.56-5.894,5.56ZM100.984-99.4H96.91l-4.792,7.969L87.326-99.4H82.919l6.944,11.531v6.406h4.151v-6.355Z"
                transform="translate(47.668 239.535)"
              />
              <path
                id="Path_1182"
                data-name="Path 1182"
                d="M14.481-81.463h4.356L10.817-99.4h-4.1L-1.278-81.463H2.976l1.589-3.844h8.328Zm-8.584-7,2.844-6.867,2.844,6.867Zm35.028,7L40.874-99.4H37.466L30.855-88.253,24.141-99.4H20.708v17.937H24.6V-91.995l5.253,8.635h1.871L37-92.225l.026,10.762ZM49.3-84.794v-4.151h8.328v-3.229H49.3v-3.895h9.43V-99.4H45.179v17.937H59.067v-3.331Z"
                transform="translate(167.39 239.535)"
              />
              <rect
                id="Rectangle_1798"
                data-name="Rectangle 1798"
                width="7.117"
                height="3.558"
                transform="translate(226.096 133)"
                fill="#1072f8"
              />
              <rect
                id="Rectangle_1799"
                data-name="Rectangle 1799"
                width="7.117"
                height="3.558"
                transform="translate(233.212 133.017) rotate(90)"
                fill="#1072f8"
              />
              <path
                id="Path_1184"
                data-name="Path 1184"
                d="M-4318.319,6067.462v2.4a7.131,7.131,0,0,1-.094,1.172v.008a9.046,9.046,0,0,1-10.421,7.421,9.014,9.014,0,0,1-5.787-3.559,9.016,9.016,0,0,1-1.634-6.862c.033-.2.072-.392.118-.584a9.047,9.047,0,0,1,8.8-6.962h5.512v3.554h-5.512a5.49,5.49,0,0,0-5.489,5.491,5.491,5.491,0,0,0,5.492,5.489,5.489,5.489,0,0,0,5.289-4.023h-4.667v-3.55Z"
                transform="translate(4484.431 -5920.365)"
              />
              <path
                id="Path_1183"
                data-name="Path 1183"
                d="M-4318.319,6067.462v2.4a7.131,7.131,0,0,1-.094,1.172v.008a9.046,9.046,0,0,1-10.421,7.421,9.014,9.014,0,0,1-5.787-3.559,9.016,9.016,0,0,1-1.634-6.862c.033-.2.072-.392.118-.584a9.047,9.047,0,0,1,8.8-6.962h5.512v3.554h-5.512a5.49,5.49,0,0,0-5.489,5.491,5.491,5.491,0,0,0,5.492,5.489,5.489,5.489,0,0,0,5.289-4.023h-4.667v-3.55Z"
                transform="translate(4375.443 -5920.365)"
              />
            </g>
          </svg>
        </div>
      </div>

      {/* Blue Background with Shpaes */}
      <div className="bg-[#F7F9FC] w-full lg:pr-4">
        <div className="lg:flex relative">
          <div className="w-5/12"></div>
          <div className="lg:w-7/12 flex flex-col-reverse items-end">
            <div className="w-full">
              {/* Shapes style */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="199"
                height="366"
                viewBox="0 0 199 366"
                className="w-44 lg:w-40 mt-32 lg:-mt-5"
              >
                <path
                  id="Rectangle_2472"
                  d="M120,0h79a0,0,0,0,1,0,0V246A120,120,0,0,1,79,366H0a0,0,0,0,1,0,0V120A120,120,0,0,1,120,0Z"
                  fill="#eaf2ff"
                />
              </svg>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="199"
              height="366"
              viewBox="0 0 199 366"
              className="w-44 lg:w-40 mt-96 lg:-mt-5"
            >
              <path
                id="Rectangle_2472"
                d="M120,0h79a0,0,0,0,1,0,0V246A120,120,0,0,1,79,366H0a0,0,0,0,1,0,0V120A120,120,0,0,1,120,0Z"
                fill="#eaf2ff"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
