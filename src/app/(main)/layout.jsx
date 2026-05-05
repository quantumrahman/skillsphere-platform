import { Be_Vietnam_Pro } from "next/font/google";
import "../globals.css";
import Header from "@/components/shared/Header/Header";

const beVietnamPro = Be_Vietnam_Pro({
    variable: "--font-be-vietnam-pro",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"]
});

export const metadata = {
    title: "Home | SkillSphere",
    description: "SkillSphere Home Page"
};

export default function MainLayout({ children }) {
    return (
        <div className={`${beVietnamPro.variable} w-full min-h-screen bg-black relative`}>
            <Header></Header>
            {children}
        </div>
    );
};
