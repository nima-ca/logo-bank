export interface BankInfo {
    logo: string;
    SHEBA_prefix: string;
    title: { fa: string; en: string };
    prefix: string[];
}

export const BANKS_INFO: BankInfo[] = [
    {
        logo: "Ansar",
        SHEBA_prefix: "063",
        title: { fa: "بانک انصار", en: "Ansar Bank" },
        prefix: ["627381"],
    },
    {
        logo: "Ayandeh",
        SHEBA_prefix: "062",
        title: { fa: "بانک آینده", en: "Ayande Bank" },
        prefix: ["636214"],
    },
    {
        logo: "Bank-Hekmat",
        SHEBA_prefix: "065",
        title: { fa: "بانک حکمت ایرانیان", en: "Hekmat Iranian Bank" },
        prefix: ["636949"],
    },
    {
        logo: "Bank-Markazi",
        SHEBA_prefix: "010",
        title: { fa: "بانک مرکزی", en: "Markazi Bank" },
        prefix: ["636949"],
    },
    {
        logo: "Dey",
        SHEBA_prefix: "066",
        title: { fa: "بانک دی", en: "Dey Bank" },
        prefix: ["502938"],
    },
    {
        logo: "Eghtesad-Novin",
        SHEBA_prefix: "055",
        title: { fa: "بانک اقتصاد نوین", en: "Eghtesad Novin Bank" },
        prefix: ["627412"],
    },
    {
        logo: "Gardeshgari",
        SHEBA_prefix: "064",
        title: { fa: "بانک گردشگری", en: "Tourism Bank" },
        prefix: ["505416"],
    },
    {
        logo: "Ghavamin",
        SHEBA_prefix: "052",
        title: { fa: "بانک قوامین", en: "Ghavamin Bank" },
        prefix: ["639599"],
    },
    {
        logo: "Iran-Zamin",
        SHEBA_prefix: "069",
        title: { fa: "بانک ایران زمین", en: "Iran Zamin Bank" },
        prefix: ["505785"],
    },
    {
        logo: "Karafarin",
        SHEBA_prefix: "053",
        title: { fa: "بانک کارآفرین", en: "Karafarin Bank" },
        prefix: ["627488", "502910"],
    },
    {
        logo: "Keshavarzi",
        SHEBA_prefix: "016",
        title: { fa: "بانک کشاورزی", en: "Keshavarzi Bank" },
        prefix: ["603770", "639217"],
    },
    {
        logo: "Maskan",
        SHEBA_prefix: "014",
        title: { fa: "بانک مسکن", en: "Maskan Bank" },
        prefix: ["628023"],
    },
    {
        logo: "Mellat",
        SHEBA_prefix: "012",
        title: { fa: "بانک ملت", en: "Mellat Bank" },
        prefix: ["610433", "991975"],
    },
    {
        logo: "Melli",
        SHEBA_prefix: "017",
        title: { fa: "بانک ملی ایران", en: "Melli Bank" },
        prefix: ["603799"],
    },
    {
        logo: "Parsian",
        SHEBA_prefix: "054",
        title: { fa: "بانک پارسیان", en: "Parsian Bank" },
        prefix: ["639194", "622106", "627884"],
    },
    {
        logo: "Post",
        SHEBA_prefix: "021",
        title: { fa: "پست بانک ایران", en: "Post Bank" },
        prefix: ["627760"],
    },
    {
        logo: "Refah",
        SHEBA_prefix: "013",
        title: { fa: "بانک رفاه کارگران", en: "Refah Bank" },
        prefix: ["589463"],
    },
    {
        logo: "Saderat",
        SHEBA_prefix: "019",
        title: { fa: "بانک صادرات ایران", en: "Saderat Bank" },
        prefix: ["603769"],
    },
    {
        logo: "Saman",
        SHEBA_prefix: "056",
        title: { fa: "بانک سامان", en: "Saman Bank" },
        prefix: ["621986"],
    },
    {
        logo: "Sepah",
        SHEBA_prefix: "015",
        title: { fa: "بانک سپه", en: "Sepah Bank" },
        prefix: ["589210"],
    },
    {
        logo: "Resalat",
        SHEBA_prefix: "070",
        title: { fa: "قرض الحسنه رسالت", en: "Gharzolhasaneh Resalat Bank" },
        prefix: ["504172"],
    },
    {
        title: { fa: "بانک شهر", en: "Shahr Bank" },
        prefix: ["502806"],
        logo: "Shahr",

        SHEBA_prefix: "061",
    },
    {
        title: { fa: "بلو بانک", en: "Bank Blu" },
        prefix: ["636949"],
        logo: "Blu",

        SHEBA_prefix: "010",
    },
    {
        title: { fa: "بانک حکمت ایرانیان", en: "Bank Hekmat" },
        prefix: ["636949"],
        logo: "Bank-Hekmat",

        SHEBA_prefix: "065",
    },
    {
        title: { fa: "بانک مرکزی", en: "Bank Markazi" },
        prefix: [],
        logo: "Bank-Markazi",

        SHEBA_prefix: "010",
    },
    {
        title: { fa: "خاورمیانه", en: "Khavar Mianeh" },
        prefix: ["585947"],
        logo: "Khavar-Mianeh",

        SHEBA_prefix: "078",
    },
    {
        title: { fa: "موسسه اعتباری کوثر", en: "Kosar" },
        prefix: ["505801"],
        logo: "Kosar",

        SHEBA_prefix: "073",
    },
    {
        title: { fa: "قرض الحسنه مهر ایران", en: "Mehr Iran" },
        prefix: ["606373"],
        logo: "Mehr-Iran",

        SHEBA_prefix: "090",
    },
    {
        title: { fa: "بانک مهر اقتصاد", en: "Mehr Eghtesad" },
        prefix: ["639370"],
        logo: "Mehr-Eghtesad",

        SHEBA_prefix: "079",
    },
    {
        title: { fa: "سامان", en: "Samen" },
        prefix: ["621986"],
        logo: "Samen",

        SHEBA_prefix: "056",
    },
    {
        title: { fa: "بانک صنعت و معدن", en: "Sanat Madan Bank" },
        prefix: ["627961"],
        logo: "Sanat-Madan",

        SHEBA_prefix: "011",
    },
    {
        title: { fa: "بانک سرمایه", en: "Sarmayeh Bank" },
        prefix: ["639607"],
        logo: "Sarmayeh",

        SHEBA_prefix: "058",
    },
    {
        title: { fa: "بانک سینا", en: "Sina Bank" },
        prefix: ["639346"],
        logo: "Sina",

        SHEBA_prefix: "059",
    },
    {
        title: { fa: "توسعه", en: "Tose'e" },
        prefix: ["628157"],
        logo: "Tosee",

        SHEBA_prefix: "051",
    },
    {
        title: { fa: "توسعه صادرات", en: "Tose'e Saderat" },
        prefix: ["627648", "207177"],
        logo: "Tosee-Saderat",

        SHEBA_prefix: "020",
    },
    {
        title: { fa: "توسعه تعاون", en: "Tose'e Ta'avon Bank" },
        prefix: ["502908"],
        logo: "Tosee-Taavon",

        SHEBA_prefix: "022",
    },
    {
        title: { fa: "بانک پاسارگاد", en: "Pasargad Bank" },
        prefix: ["639347", "502229"],
        logo: "Pasargad",

        SHEBA_prefix: "057",
    },
];
