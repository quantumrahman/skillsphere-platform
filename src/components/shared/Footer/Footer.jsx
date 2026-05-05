import { 
    RiFacebookFill, 
    RiGithubFill, 
    RiLinkedinFill,
    RiMailFill,
    RiPhoneFill,
    RiUserLocationFill
} from "react-icons/ri";
import { 
    socialLinks, 
    quickLinks,
    legalLinks,
    contactLinks
} from "@/constants/links";

import Link from "next/link";
import Container from "@/components/ui/Container/Container";
import Logo from "@/components/ui/Logo/Logo";

const Footer = () => {

    return (
        <div className="w-full bg-[radial-gradient(circle_at_bottom,#0C342C_0%,#050A08_60%,#000000_100%)]">
            <Container>
                <footer className="w-full border-t border-white/10 pt-[50px] md:pt-[60px] lg:pt-[100px] transition-all duration-300 ease-linear">
                    <div className="w-auto flex justify-between flex-col gap-6 xl:flex-row">
                        <div className="space-y-[30px] lg:space-y-10">
                            <Logo />
                            <div className="w-full space-y-[30px] lg:space-y-10">
                                <p className="text-[15px] font-normal text-[#E6FFF9] md:text-base lg:text-lg transition-all duration-300 ease-linear">Your trusted platform to learn <br /> new skill and grow your career.</p>
                                <div className="flex items-center gap-[14px]">
                                    {socialLinks.map((link) => (
                                        <Link
                                            key={link?.id}
                                            href={'/'}
                                            className="block p-3 lg:p-[14px] bg-[#021412]/50 rounded-md lg:rounded-lg border border-white/10 transition-all duration-300 ease-linear hover:-translate-y-1.5 hover:bg-gradient-to-t hover:from-[#076653]/10 hover:to-transparent"
                                        >
                                            {link?.icon === "facebook" && (
                                                <RiFacebookFill 
                                                    color="#E6FFF9" 
                                                    className="text-xl lg:text-2xl transition-all duration-300 ease-linear"
                                                />
                                            )}
                                            {link?.icon === "github" && (
                                                <RiGithubFill 
                                                    color="#E6FFF9" 
                                                    className="text-xl lg:text-2xl transition-all duration-300 ease-linear"
                                                />
                                            )}
                                            {link?.icon === "linkedin" && (
                                                <RiLinkedinFill 
                                                    color="#E6FFF9" 
                                                    className="text-xl lg:text-2xl transition-all duration-300 ease-linear"
                                                />
                                            )}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="w-auto grid grid-cols-1 gap-6 sm:grid-cols-3">
                            <div className="w-full">
                                <h4 className="text-lg font-semibold text-[#E6FFF9] md:text-xl">Quick Links</h4>
                                <div className="flex flex-col gap-1 md:gap-2 mt-[10px] lg:gap-[14px]">
                                    {quickLinks.map((link) => (
                                        <Link 
                                            key={link?.id} 
                                            href={'/'}
                                            className="w-fit text-sm font-normal text-[#E6FFF9] transition-all duration-300 ease-linear md:text-base lg:text-lg hover:text-[#0FAE96]"
                                        >
                                            {link?.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="w-full">
                                <h4 className="text-lg font-semibold text-[#E6FFF9] md:text-xl">Legal</h4>
                                <div className="flex flex-col gap-1 md:gap-2 mt-[10px] lg:gap-[14px]">
                                    {legalLinks.map((link) => (
                                        <Link 
                                            key={link?.id} 
                                            href={'/'}
                                            className="w-fit text-sm font-normal text-[#E6FFF9] transition-all duration-300 ease-linear md:text-base lg:text-lg hover:text-[#0FAE96]"
                                        >
                                            {link?.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="w-full">
                                <h4 className="text-lg font-semibold text-[#E6FFF9] md:text-xl">Contact</h4>
                                <div className="flex flex-col gap-1 md:gap-2 mt-[10px] lg:gap-[14px]">
                                    {contactLinks.map((link) => (
                                        <Link 
                                            key={link?.id} 
                                            href={'/'}
                                            className="w-fit text-sm font-normal text-[#E6FFF9] transition-all duration-300 ease-linear md:text-base lg:text-lg hover:text-[#0FAE96] flex items-center gap-1 md:gap-[6px]"
                                        >
                                            {link?.icon === "mail" && (
                                                <>
                                                    <RiMailFill className="text-xl md:text-2xl transition-all duration-300 ease-linear" />
                                                    {link?.email}
                                                </>
                                            )}
                                            {link?.icon === "phone" && (
                                                <>
                                                    <RiPhoneFill className="text-xl md:text-2xl transition-all duration-300 ease-linear" />
                                                    {link?.phone}
                                                </>
                                            )}
                                            {link?.icon === "location" && (
                                                <>
                                                    <RiUserLocationFill className="text-xl md:text-2xl transition-all duration-300 ease-linear" />
                                                    {link?.location}
                                                </>
                                            )}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mt-5 md:mt-[30px] lg:mt-[50px] pt-[20px] pb-6 md:pt-[30px] md:pb-5 lg:pt-[50px] lg:pb-[30px] border-t border-white/10 flex items-center flex-col sm:flex-row justify-between">
                        <p className="text-sm font-normal text-[#E6FFF9] lg:text-lg">Copyright &copy; {new Date().getFullYear()} SkillSphere</p>
                        <p className="text-sm font-normal text-[#E6FFF9] lg:text-lg">Developed by Rakibul Rahman</p>
                    </div>
                </footer>
            </Container>
        </div>
    );
};

export default Footer;
