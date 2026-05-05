import Logo from "@/components/ui/Logo/Logo";
import SignUpForm from "@/components/auth/SignupForm/SignUpForm";

const SignUpPage = () => {

    return (
        <div className="w-full min-h-screen flex items-center justify-center">
            <div className="w-full max-w-[460px] px-5 lg:max-w-[560px] space-y-[30px] md:space-y-[40px] lg:space-y-[50px] transition-all duration-300 ease-linear">
                <div className="flex items-center justify-center gap-3">
                    <Logo />
                    <h1 className="text-[28px] font-semibold text-[#E6FFF9] md:text-[32px] lg:text-[38px] transition-all duration-300 ease-linear">SkillSphere</h1>
                </div>
                <SignUpForm />
            </div>
        </div>
    );
};

export default SignUpPage;
