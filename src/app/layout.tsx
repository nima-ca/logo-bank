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
    keywords: [
        "لوگو بانک",
        "لوگوی بانک‌های ایرانی",
        "دانلود لوگو بانک",
        "لوگو بانک‌ها برای طراحی",
        "لوگو برای توسعه‌دهنده",
        "لوگوی بانک های ایرانی",
        "بانک‌ها و لوگوی آن‌ها",
    ],
    robots: "index, follow",
    metadataBase: new URL("https://logobanks.ir"),
    openGraph: {
        title: "لوگو بانک | دریافت لوگوی بانک‌های ایران در سریع‌ترین زمان",
        description:
            "با لوگو بانک، تنها با نوشتن نام بانک، لوگوی آن را با کیفیت بالا دریافت کنید. ابزار مناسب برای طراحان، توسعه‌دهندگان و علاقه‌مندان به طراحی رابط کاربری.",
        url: "https://logobanks.ir",
        siteName: "لوگو بانک",
        locale: "fa_IR",
        type: "website",
        images: [
            {
                url: "https://logobanks.ir/images/og/og-image.png",
                width: 1200,
                height: 630,
                alt: "لوگو بانک - دریافت لوگوی بانک‌های ایرانی",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "لوگو بانک | دریافت سریع لوگوی بانک‌های ایران",
        description:
            "سریع‌ترین راه برای دریافت لوگوی بانک‌های ایرانی. مناسب برای طراحان و برنامه‌نویسان.",
        images: ["https://logobanks.ir/images/og/og-image.png"],
        site: "@logobank_ir",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fa" dir="rtl">
            <body
                className={`${vazirmatn.variable}  antialiased font-vazirmatn`}
            >
                {children}
            </body>
        </html>
    );
}
