"use client";

import { usePathname } from "next/navigation";

import headerLinks from "@/constants/headerLInks";
import Link from "next/link";

const HeaderNav = () => {
    const pathname = usePathname();

    return (
        <div className="flex items-center">
            {headerLinks.map((link) => (
                <Link 
                    key={link?.id} 
                    href={link?.path}
                    className={`inline-block text-sm font-normal text-[#262626] rounded-md transition-all duration-200 ease-in-out px-5 py-3 lg:px-6 lg:py-[14px] lg:text-lg ${pathname === link?.path ? 'bg-[#F1F1F3]' : 'bg-[#f7f7f8] hover:underline'}`}
                >
                    {link?.name}
                </Link>
            ))}
        </div>
    );
};

export default HeaderNav;
