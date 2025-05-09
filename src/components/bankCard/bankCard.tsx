import { BankInfo } from "@src/constants/bankInfo.constants";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import DownloadIcon from "../icons/download";

interface BankCardProps {
    info: BankInfo;
}

const BankCard: FC<BankCardProps> = ({ info }) => {
    const imageSrc = `/images/bank/${info.logo}.svg`;
    return (
        <div className="flex items-center bg-white border border-gray-300 rounded-lg p-4 justify-between">
            <div className="flex items-center gap-4">
                <Image
                    src={imageSrc}
                    alt={info.title.fa}
                    width={60}
                    height={60}
                    priority
                />
                <div className="flex flex-col gap-1">
                    <p>{info.title.fa}</p>
                    <p>{info.title.en}</p>
                </div>
            </div>

            <Link
                href={imageSrc}
                target="_blank"
                rel="noopener noreferrer"
                download={`${info.logo}.svg`}
                aria-label={`دانلود لوگو ${info.title.fa}`}
            >
                <DownloadIcon className="w-5 h-5" />
            </Link>
        </div>
    );
};

export default BankCard;
