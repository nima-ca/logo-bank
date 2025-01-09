import BankCard from "@src/components/bankCard/bankCard";
import DownloadIcon from "@src/components/icons/download";
import GithubIcon from "@src/components/icons/github";
import { BANKS_INFO } from "@src/constants/bankInfo.constants";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col main-container py-5 px-4">
            <div className="flex items-center justify-between mb-10">
                <h1 className="text-lg lg:text-2xl font-bold">
                    لیست بانک ها و لوگو
                </h1>

                <Link
                    href={"https://github.com/nima-ca/logo-bank"}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <GithubIcon className="w-6 h-6" />
                </Link>
            </div>

            <div className="flex flex-col items-end w-full gap-4">
                <Link
                    href="/images/banks.zip"
                    download={"banks.zip"}
                    className="flex items-center gap-2"
                >
                    <p>دانلود همه</p>
                    <DownloadIcon className="w-5 h-5" />
                </Link>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
                    {BANKS_INFO.map((bankInfo) => (
                        <BankCard
                            key={`bank-${bankInfo.logo}`}
                            info={bankInfo}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
