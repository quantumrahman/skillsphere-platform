import Image from "next/image";
import logo from "@/assets/image/logo.png";

const HeaderLogo = () => {

    return (
        <div className="w-[40px] h-[40px] bg-[#FF9500] rounded-[6px] px-2 py-4 flex items-center justify-center transition-all duration-300 ease-linear md:w-[44px] md:h-[44px] md:rounded-[8px] md:px-[5.5px] md:py-[5.5px] lg:w-[54px] lg:h-[54px] lg:px-[7px] lg:py-[7px]">
            <div className="w-[30px] h-[30px] relative transition-all duration-300 ease-linear md:w-[32px] md:h-[32px] lg:w-[40px] lg:h-[40px]">
                <Image 
                    src={logo} 
                    alt="SkillSphere logo" 
                    fill={true} 
                    className="w-full h-auto object-cover transition-all duration-300 ease-linear" 
                />
            </div>
        </div>
    );
};

export default HeaderLogo;
