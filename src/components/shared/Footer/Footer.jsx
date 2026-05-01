import { 
    contactInfo, 
    quickLinks, 
    legalInfo, 
    socialInfo 
} from "@/constants/footerInfo";

import Container from "@/components/ui/Container/Container";
import FooterLogo from "@/components/ui/Logos/FooterLogo/FooterLogo";
import Image from "next/image";
import FooterNav from "@/components/ui/Navbars/FooterNav/FooterNav";
import Link from "next/link";

const Footer = () => {

    return (
        <div className="w-full bg-[#FFFFFF] px-4  pt-[50px] md:px-5 lg:px-[30px] md:pt-[60px] lg:pt-[100px]">
            <Container>
                <footer className="w-full grid gap-4 md:grid-cols-6 md:gap-5 lg:gap-6">
                    <div className="w-full md:col-span-6 lg:col-span-3">
                        <FooterLogo></FooterLogo>
                        <div className="space-y-5 mt-[30px] lg:mt-[40px]">
                            {contactInfo.map((info) => (
                                <div key={info?.id} className="flex items-center gap-[6px]">
                                    <div className="w-[24px] h-[24px] relative">
                                        <Image 
                                            src={info?.icon} 
                                            alt={info?.alt}
                                            fill={true}
                                            className="w-full h-auto object-cover"
                                        ></Image>
                                    </div>
                                    <span className="text-[15px] font-normal text-[#262626] lg:text-lg">{info?.details}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full grid grid-cols-2 gap-4 sm:grid-cols-3 md:col-span-6 lg:col-span-3">
                        <div className="w-full">
                            <FooterNav heading="Quick Links" links={quickLinks}></FooterNav>
                        </div>
                        <div className="w-full">
                            <FooterNav heading="Legal" links={legalInfo}></FooterNav>
                        </div>
                        <div className="w-full col-span-2 space-y-[10px] sm:col-span-1 lg:space-y-[14px]">
                            <span className="inline-block text-lg font-semibold text-[#262626] transition-all duration-300 ease-linear lg:text-xl">
                                Social Links
                            </span>
                            <div className="space-x-[14px]">
                                {socialInfo?.map((link) => (
                                    <Link 
                                        key={link?.id} 
                                        href={link?.path} 
                                        className="inline-block p-3 bg-[#F7F7F8] rounded-md border border-[#F1F1F3] transition-all duration-300 ease-linear hover:-translate-y-1 lg:rounded-lg"
                                    >
                                        <div className="w-5 h-5 relative">
                                            <Image 
                                                src={link?.icon} 
                                                alt={link?.alt} 
                                                fill={true} 
                                                className="w-full h-auto object-cover"
                                            />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </footer>
            </Container>
            <div className="w-full border-t border-[#F1F1F3] pt-5 pb-[24px] mt-5 text-center space-y-1 md:pb-5 md:pt-[30px] md:mt-[30px] lg:pt-[50px] lg:pb-[30px] lg:mt-[50px]">
                <span className="block text-sm font-normal text-[#656567] lg:text-lg">&copy; {`${new Date().getFullYear()}`} SkillSphere. All rights reseverd.</span>
                <span className="block text-sm font-normal text-[#656567] lg:text-lg">Developed by Rakibul Rahman.</span>
            </div>
        </div>
    );
};

export default Footer;
