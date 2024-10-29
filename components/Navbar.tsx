import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-[#252B42] w-full flex justify-center overflow-hidden">
      {/* Main Header Container */}
      <div className="flex items-center justify-between w-full">
        {/* Brand Name Container */}
        <div className="flex items-center w-auto py-[13px] pr-[35px] mr-[41px] ml-[195px]">
          <h1 className="text-white font-[700] text-[24px] whitespace-nowrap">
            BrandName
          </h1>
        </div>

        {/* Navigation Links Container */}
        <div className="flex items-center justify-between w-full h-[58px] pt-3">
          {/* Primary Navigation Links */}
          <div className="flex items-center gap-[21px] mr-[351px]">
            <a
              href="#"
              className="text-white font-[700] text-[14px] text-center whitespace-nowrap"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white font-[700] text-[14px] text-center whitespace-nowrap"
            >
              Product
            </a>
            <a
              href="#"
              className="text-white font-[700] text-[14px] text-center whitespace-nowrap"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-white font-[700] text-[14px] text-center whitespace-nowrap"
            >
              Contact
            </a>
          </div>

          {/* Secondary Navigation Links */}
          <div className="flex items-center mr-[195px]">
            {/* Login Link */}
            <a href="#" className="text-white font-[700] text-[14px] mr-[45px]">
              Login
            </a>

            {/* Join Us Button */}
            <button className="items-center justify-center bg-[#23A6F0] text-white font-[700] text-sm py-[15px] px-[25px] rounded-l-[5px] whitespace-nowrap mr-[195px]">
              Join Us
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
