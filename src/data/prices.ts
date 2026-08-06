import type { PriceCourse } from "@/types";

export const priceCourses: PriceCourse[] = [
  {
    id: "first",
    name: "初回限定コース",
    description: "初めての方、限定でお得に受けられるコース",
    price: "2,980",
    note: "通常料金→初診料2,000円＋施術料12,300円",
  },
  {
    id: "regular",
    name: "根本改善アドバンスコース",
    description: "通常施術料",
    price: "12,300",
  },
  {
    id: "ticket",
    name: "プリペイドカード使用可能",
    description: "各種プリペイドカードがご利用いただけます。",
    price: "",
  },
];

export const priceNotes = [
  "※ 初回はカウンセリング・検査の時間を含みます。",
  "※ お支払いは現金・各種クレジットカード・電子マネーに対応しております。",
  "※ 表示価格はすべて税込価格です。",
];
