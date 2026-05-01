import { Be_Vietnam_Pro } from "next/font/google";
import "../globals.css";

const beVietnamPro = Be_Vietnam_Pro({
    subsets: ['latin'],
    weight: ["400", "500", "600", "700"],
    variable: "--font-be-vietnam",
});

export const metadata = {
    title: {
        default: "Authentication | SkillSphere",
        template: "%s | SkillSphere",
    },
    description: "Sign in or create your SkillSphere account to access personalized learning experience.",
    robots: {
        index: false,
        follow: false
    },
};

export default function AuthLayout({ children }) {
    return (
        <html
            lang="en"
            className={`${beVietnamPro.variable} h-full antialiased`}
        >
            <body className="min-h-full">
                {children}
            </body>
        </html>
    );
};
