import Link from "next/link";

const FooterNav = ({ heading, links }) => {

    return (
        <div className="space-y-[10px] lg:space-y-[14px]">
            <span className="inline-block text-lg font-semibold text-[#262626] transition-all duration-300 ease-linear lg:text-xl">{heading}</span>
            <div className="flex flex-col gap-1 md:gap-2">
                {links?.map((link) => (
                    <Link 
                        key={link?.id} 
                        href={link?.path} 
                        className="inline-block text-sm font-normal text-[#59595A] transition-all duration-200 ease-in-out hover:text-[#262626] hover:translate-x-0.5 md:text-base lg:text-lg"
                    >
                        {link?.name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default FooterNav;
