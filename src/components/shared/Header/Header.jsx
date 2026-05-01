import Image from "next/image";
import Container from "@/components/ui/Container/Container";
import logo from "@/assets/image/logo.png";
import menu from "@/assets/icons/menu.png";
import HeaderNav from "@/components/ui/Navbars/HeaderNav/HeaderNav";
import SignInButton from "@/components/ui/Buttons/SignInButton/SignInButton";
import Link from "next/link";
import HeaderLogo from "@/components/ui/Logos/HeaderLogo/HeaderLogo";

const Header = () => {

    return (
        <div className="w-full px-4 md:px-5 lg:px-[30px]">
            <div className="w-full py-[16.5px] border-b border-[#F1F1F3] relative transition-all duration-300 ease-linear md:pt-4 md:pb-5 lg:pt-[20.5px] lg:pb-[24.5px]">
                <Container>
                    <header className="w-full flex items-center justify-between">
                        <div className="flex items-center justify-center gap-[50px]">
                            <HeaderLogo></HeaderLogo>
                            <div className="hidden md:block">
                                <HeaderNav></HeaderNav>
                            </div>
                        </div>
                        <div className="hidden md:block space-x-[30px]">
                            <Link href={'/auth/signup'} className="text-sm font-normal text-[#262626] transition-all duration-300 ease-linear lg:text-lg">Sign Up</Link>
                            <SignInButton></SignInButton>
                        </div>
                        <div className="w-[34px] h-[34px] px-[4.25px] py-[8.5px] cursor-pointer md:hidden">
                            <div className="w-[25.5px] h-[17px] relative">
                                <Image 
                                    src={menu} 
                                    alt="menu icon" 
                                    fill={true} 
                                    className="w-full h-auto object-cover" 
                                />
                            </div>
                        </div>
                    </header>
                </Container>
            </div>
        </div>
    );
};

export default Header;
