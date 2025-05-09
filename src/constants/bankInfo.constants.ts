export interface BankInfo {
    logo: string;
    iban_prefix: string;
    title: { fa: string; en: string };
    cardnumber_prefix: string[];
}

export const BANKS_INFO: BankInfo[] = [
    {
        logo: "ansar",
        iban_prefix: "063",
        title: { fa: "بانک انصار", en: "Ansar Bank" },
        cardnumber_prefix: ["627381"],
    },
    {
        logo: "ayandeh",
        iban_prefix: "062",
        title: { fa: "بانک آینده", en: "Ayande Bank" },
        cardnumber_prefix: ["636214"],
    },
    {
        logo: "bank-hekmat",
        iban_prefix: "065",
        title: { fa: "بانک حکمت ایرانیان", en: "Hekmat Iranian Bank" },
        cardnumber_prefix: ["636949"],
    },

    {
        logo: "dey",
        iban_prefix: "066",
        title: { fa: "بانک دی", en: "Dey Bank" },
        cardnumber_prefix: ["502938"],
    },
    {
        logo: "eghtesad-novin",
        iban_prefix: "055",
        title: { fa: "بانک اقتصاد نوین", en: "Eghtesad Novin Bank" },
        cardnumber_prefix: ["627412"],
    },
    {
        logo: "gardeshgari",
        iban_prefix: "064",
        title: { fa: "بانک گردشگری", en: "Tourism Bank" },
        cardnumber_prefix: ["505416"],
    },
    {
        logo: "ghavamin",
        iban_prefix: "052",
        title: { fa: "بانک قوامین", en: "Ghavamin Bank" },
        cardnumber_prefix: ["639599"],
    },
    {
        logo: "iran-zamin",
        iban_prefix: "069",
        title: { fa: "بانک ایران زمین", en: "Iran Zamin Bank" },
        cardnumber_prefix: ["505785"],
    },
    {
        logo: "karafarin",
        iban_prefix: "053",
        title: { fa: "بانک کارآفرین", en: "Karafarin Bank" },
        cardnumber_prefix: ["627488", "502910"],
    },
    {
        logo: "keshavarzi",
        iban_prefix: "016",
        title: { fa: "بانک کشاورزی", en: "Keshavarzi Bank" },
        cardnumber_prefix: ["603770", "639217"],
    },
    {
        logo: "maskan",
        iban_prefix: "014",
        title: { fa: "بانک مسکن", en: "Maskan Bank" },
        cardnumber_prefix: ["628023"],
    },
    {
        logo: "mellat",
        iban_prefix: "012",
        title: { fa: "بانک ملت", en: "Mellat Bank" },
        cardnumber_prefix: ["610433", "991975"],
    },
    {
        logo: "melli",
        iban_prefix: "017",
        title: { fa: "بانک ملی ایران", en: "Melli Bank" },
        cardnumber_prefix: ["603799"],
    },
    {
        logo: "pasargad",
        iban_prefix: "057",
        title: { fa: "بانک پاسارگاد", en: "Pasargad Bank" },
        cardnumber_prefix: ["639347", "502229"],
    },
    {
        logo: "parsian",
        iban_prefix: "054",
        title: { fa: "بانک پارسیان", en: "Parsian Bank" },
        cardnumber_prefix: ["639194", "622106", "627884"],
    },
    {
        logo: "post",
        iban_prefix: "021",
        title: { fa: "پست بانک ایران", en: "Post Bank" },
        cardnumber_prefix: ["627760"],
    },
    {
        logo: "refah",
        iban_prefix: "013",
        title: { fa: "بانک رفاه کارگران", en: "Refah Bank" },
        cardnumber_prefix: ["589463"],
    },
    {
        logo: "saderat",
        iban_prefix: "019",
        title: { fa: "بانک صادرات ایران", en: "Saderat Bank" },
        cardnumber_prefix: ["603769"],
    },
    {
        logo: "saman",
        iban_prefix: "056",
        title: { fa: "بانک سامان", en: "Saman Bank" },
        cardnumber_prefix: ["621986"],
    },
    {
        logo: "sepah",
        iban_prefix: "015",
        title: { fa: "بانک سپه", en: "Sepah Bank" },
        cardnumber_prefix: ["589210"],
    },
    {
        logo: "resalat",
        iban_prefix: "070",
        title: { fa: "قرض الحسنه رسالت", en: "Gharzolhasaneh Resalat Bank" },
        cardnumber_prefix: ["504172"],
    },
    {
        logo: "shahr",
        iban_prefix: "061",
        title: { fa: "بانک شهر", en: "Shahr Bank" },
        cardnumber_prefix: ["502806"],
    },
    {
        logo: "blu",
        iban_prefix: "010",
        title: { fa: "بلو بانک", en: "Blu Bank" },
        cardnumber_prefix: ["636949"],
    },

    {
        logo: "bank-markazi",
        iban_prefix: "010",
        title: { fa: "بانک مرکزی", en: "Bank Markazi" },
        cardnumber_prefix: ["636797"],
    },
    {
        logo: "khavar-mianeh",
        iban_prefix: "078",
        title: { fa: "خاورمیانه", en: "Middle East Bank" },
        cardnumber_prefix: ["585947"],
    },
    {
        logo: "kosar",
        iban_prefix: "073",
        title: { fa: "موسسه اعتباری کوثر", en: "Kosar" },
        cardnumber_prefix: ["505801"],
    },
    {
        logo: "mehr-iran",
        iban_prefix: "090",
        title: { fa: "قرض الحسنه مهر ایران", en: "Mehr Iran Bank" },
        cardnumber_prefix: ["606373"],
    },
    {
        logo: "mehr-eghtesad",
        iban_prefix: "079",
        title: { fa: "بانک مهر اقتصاد", en: "Mehr Eghtesad Bank" },
        cardnumber_prefix: ["639370"],
    },
    {
        title: { fa: "بانک صنعت و معدن", en: "Sanat Madan Bank" },
        cardnumber_prefix: ["627961"],
        logo: "sanat-madan",
        iban_prefix: "011",
    },
    {
        logo: "sarmayeh",
        iban_prefix: "058",
        title: { fa: "بانک سرمایه", en: "Sarmayeh Bank" },
        cardnumber_prefix: ["639607"],
    },
    {
        logo: "sina",
        iban_prefix: "059",
        title: { fa: "بانک سینا", en: "Sina Bank" },
        cardnumber_prefix: ["639346"],
    },
    {
        logo: "tosee-saderat",
        title: { fa: "توسعه صادرات", en: "Tose'e Saderat" },
        iban_prefix: "020",
        cardnumber_prefix: ["627648", "207177"],
    },
    {
        logo: "tosee-taavon",
        iban_prefix: "022",
        title: { fa: "توسعه تعاون", en: "Tose'e Ta'avon Bank" },
        cardnumber_prefix: ["502908"],
    },

    {
        logo: "tejarat",
        iban_prefix: "018",
        title: { fa: "بانک تجارت", en: "Tejarat Bank" },
        cardnumber_prefix: ["627353", "585983"],
    },
];
