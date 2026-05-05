import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {

    return (
        <div className="w-full flex items-center gap-3">
            <div className="flex-1 h-px bg-[#0B3A33]"></div>
            <button className="p-4 rounded-full bg-[#021412]/50 backdrop-blur-sm border border-[#0B3A33] lg:p-5 transition-all duration-300 ease-linear hover:bg-[#021412] hover:border-[#00FFA3] cursor-pointer">
                <FcGoogle className="text-2xl lg:text-3xl transition-all duration-300 ease-linear" />
            </button>
            <div className="flex-1 h-px bg-[#0B3A33]"></div>
        </div>
    );
};

export default SocialLogin;
