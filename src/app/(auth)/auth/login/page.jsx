import Logo from "@/components/ui/Logo/Logo.jsx";

const LoginPage = () => {

    return (
        <div className="w-full min-h-screen flex items-center justify-center">
            <div className="w-full max-w-[660px] px-5">
                <div className="flex items-center justify-center gap-3">
                    <Logo />
                    <h1 className="text-[28px] font-semibold text-[#E6FFF9] md:text-[32px] lg:text-[38px] transition-all duration-300 ease-linear">SkillSphere</h1>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
