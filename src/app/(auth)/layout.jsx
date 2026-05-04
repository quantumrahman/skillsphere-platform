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
        <div className={`${beVietnamePro.variable} w-full min-h-screen antialiased`}>
            {children}
        </div>
    );
};
