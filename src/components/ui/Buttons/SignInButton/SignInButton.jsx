import Link from "next/link";


const SignInButton = () => {

    return (
        <Link href={'/auth/signin'}>
            <button className="px-6 py-3 bg-[#FF9500] rounded-md cursor-pointer transition-all duration-300 ease-linear lg:px-[34px] lg:rounded-[8px]">
                <span className="text-sm font-normal text-white transition-all duration-300 ease-linear lg:text-lg">
                    Login
                </span>
            </button>
        </Link>
    );
};

export default SignInButton;
