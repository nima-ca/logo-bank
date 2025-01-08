import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
    variable: "--font-vazirmatn",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "لوگو بانک | دریافت سریع لوگوی بانک‌ها",
    description:
        "لوگو بانک یک ابزار ساده و سریع است که به شما امکان می‌دهد لوگوی هر بانک را تنها با وارد کردن نام آن دریافت کنید. مناسب برای توسعه‌دهندگان، طراحان، و همه‌ی کسانی که نیاز به دسترسی سریع به لوگوی بانک‌ها دارند.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fa" dir="rtl">
            <body className={`${vazirmatn.variable}  antialiased`}>
                {children}
            </body>
        </html>
    );
}
