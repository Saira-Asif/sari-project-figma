export default function Home() {
  return (
    <div className="flex justify-center w-full min-h-screen mt-[104px] px-[197px]">
      {/* Main Body Container */}
      <div className="w-full flex flex-col items-center px-[172.5px]">
        {/* Welcome Text */}
        <div className="w-full text-center text-[#23A6F0] font-bold my-[40px]">
          Welcome
        </div>

        {/* Selling on the Internet Heading */}
        <div className="flex flex-col items-center w-full text-center">
          <h1 className="w-full text-white font-bold text-[58px] mx-[78.5px]">
            Selling on the
            <br />
            internet like a pro
          </h1>

          {/* Subheading Text */}
          <h4 className="w-full text-white text-[20px] my-[40px]">
            We know how large objects will act, but things on a<br />
            small scale just do not act that way.
          </h4>
        </div>

        {/* Button Container */}
        <div className="flex items-center gap-[10px] mb-[60px]">
          {/* Get Quote Button */}
          <button className="flex items-center justify-center px-[40px] py-[15px] bg-[#23A6F0] text-white font-bold text-[14px] rounded">
            Get Quote now
          </button>

          {/* Learn More Button */}
          <button className="flex items-center justify-center px-[40px] py-[15px] border border-[#23A6F0] text-[#23A6F0] font-bold text-[14px] rounded">
            Learn More
          </button>
        </div>

        {/* New Card Container */}
        <div className="flex justify-center gap-[30px] my-[80px]">
          {/* Card 1 */}
          <div className="w-[328px] py-[35px] px-[40px] bg-white shadow-[0px_13px_19px_0px_#00000012]">
            <div className="w-[70px] h-[76px] mb-[20px] bg-[#FFDCD1] rounded-[10px]"></div>
            <h3 className="font-bold text-base mb-[20px] text-[#252B42] whitespace-nowrap">
              training Courses
            </h3>
            <div className="w-[50px] h-[2px] bg-[#E74040] mb-[20px]"></div>
            <p className="font-[400] text-sm text-[#737373] whitespace-nowrap">
              The gradual accumulation of
              <br />
              information about atomic and
              <br />
              small-scale behaviour...
            </p>
          </div>

          {/* Card 2 */}
          <div className="w-[328px] py-[35px] px-[40px] bg-white shadow-[0px_13px_19px_0px_#00000012]">
            <div className="w-[70px] h-[76px] mb-[20px] bg-[#B9EAA8] rounded-[10px]"></div>
            <h3 className="font-bold text-base mb-[20px] text-[#252B42] whitespace-nowrap">
              2,769 online courses
            </h3>
            <div className="w-[50px] h-[2px] mb-[20px] bg-[#E74040]"></div>
            <p className="font-[400] text-sm text-[#737373] whitespace-nowrap">
              The gradual accumulation of
              <br />
              information about atomic and
              <br />
              small-scale behaviour...
            </p>
          </div>

          {/* Card 3 */}
          <div className="w-[328px] py-[35px] px-[40px] bg-[#23A6F0] shadow-[0px_13px_19px_0px_#00000012]">
            <div className="w-[70px] h-[76px] mb-[20px] bg-white rounded-[10px]"></div>
            <h3 className="font-bold text-base text-[#FFFFFF] whitespace-nowrap mb-[20px]">
              training Courses
            </h3>
            <div className="w-[50px] h-[2px] mb-[20px] bg-[#FFFFFF]"></div>
            <p className="font-[400] text-sm text-[#FFFFFF] whitespace-nowrap">
              The gradual accumulation of
              <br />
              information about atomic and
              <br />
              small-scale behaviour...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
