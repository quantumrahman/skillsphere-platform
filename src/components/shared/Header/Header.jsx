"use client";

import { navlinks } from "@/constants/links";
import { usePathname, useRouter } from "next/navigation";
import { RiMenuLine } from "react-icons/ri";

import Link from "next/link";
import Container from "@/components/ui/Container/Container";
import Logo from "@/components/ui/Logo/Logo";
import Button from "@/components/ui/Buttons/Button/Button";

const Header = () => {
    const pathname = usePathname();
    const router = useRouter();

    const handleLoginClick = () => {
        router.push('/auth/login');
    };

    return (
        <div className="w-full py-[14px] md:py-4 lg:py-5 transition-all duration-300 ease-linear border-b border-white/10 fixed top-0">
            <Container>
                <header className="w-full flex items-center justify-between">
                    <div className="w-fit flex items-center justify-center gap-[50px]">
                        <Logo />
                        <div className="space-x-[26px] hidden md:block">
                            {navlinks.map((link) => (
                                <Link 
                                    key={link?.id} 
                                    href={link?.path} 
                                    className={`text-sm font-normal lg:text-lg transition-all duration-200 ease-linear
                                        ${pathname === link?.path
                                            ? "text-[#E6FFF9]"
                                            : "text-[#E6FFF9] hover:text-[#0FAE96]"
                                        }
                                    `}
                                >
                                    {link?.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="w-auto flex items-center justify-center gap-5 md:gap-[30px]">
                        <Link 
                            href={'/auth/signup'}
                            className="text-sm font-normal text-[#E6FFF9] lg:text-lg transition-all duration-300 ease-linear hover:underline"
                        >
                            Sign Up
                        </Link>
                        <Button variant="primary" onClick={handleLoginClick}>Login</Button>
                        <button className="w-[34px] h-[34px] flex items-center justify-center cursor-pointer md:hidden">
                            <RiMenuLine size={24} color="#E6FFF9"/>
                        </button>
                    </div>
                </header>
            </Container>
        </div>
    );
};

export default Header;
