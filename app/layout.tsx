import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <header className="flex flex-col fixed w-full">
                    <img id="img-header" className="hidden lg:flex" src="/assets/desktop/bg-pattern-header.svg" alt=""/>
                    <img id="img-header" className="hidden md:flex lg:hidden" src="/assets/tablet/bg-pattern-header.svg" alt=""/>
                    <img src="/assets/mobile/bg-pattern-header.svg" className="md:hidden" alt="" />
                </header>
                {children}
            </body>
        </html>
    );
}
