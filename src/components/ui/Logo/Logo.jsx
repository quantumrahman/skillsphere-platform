import Image from "next/image";
import logo from "@/assets/images/logo.png";

const Logo = () => {

    return (
        <div className="w-10 h-10 rounded-md bg-gradient-to-r from-[#06231D] via-[#0C342C] to-[#076653] flex items-center justify-center md:w-[44px] md:h-[44px] lg:w-[54px] lg:h-[54px] md:rounded-lg transition-all duration-300 ease-linear">
            <div className="w-[30px] h-[30px] md:w-[33px] md:h-[33px] lg:w-[40px] lg:h-[40px] relative transition-all duration-300 ease-linear">
                <Image 
                    src={logo}
                    alt="skill-sphere logo"
                    fill={true}
                    className="w-full h-auto object-contain"
                />
            </div>
        </div>
    );
};

export default Logo;
