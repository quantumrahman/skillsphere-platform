import { Be_Vietnam_Pro } from "next/font/google";
import "../globals.css";

const beVietnamePro = Be_Vietnam_Pro({
    variable: "--font-be-vietnam-pro",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"]
});

export const metadata = {
    title: "Authentication | SkillSphere",
    description: "SkillSphere Authentication."
};

export default function AuthLayout({ children }) {
    return (
        <div className={`${beVietnamePro.variable} w-full min-h-screen antialiased bg-black bg-[radial-gradient(circle_at_top,#0C342C_0%,#050A08_60%,#000000_100%)] relative`}>
            {children}
            <div className="w-full text-center py-4 absolute bottom-0 px-5">
                <span className="text-sm text-[#5C8F86]">Copyright &copy; 2026. Developed by Rakibul Rahman</span>
            </div>
        </div>
    );
};
