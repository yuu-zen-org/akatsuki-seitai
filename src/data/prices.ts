import type { PriceCourse } from "@/types";

export const priceCourses: PriceCourse[] = [
  {
    id: "first",
    name: "初回限定コース",
    description: "初めての方、限定でお得に受けられるコース",
    price: "3,278",
    note: "通常料金→初診料2,000円＋施術料6,900円",
  },
  {
    id: "regular",
    name: "通常コース",
    description: "通常施術料",
    price: "6,900",
  },
  {
    id: "ticket",
    name: "お得な回数券",
    description: "10回通常料金◯◯円",
    price: "◯◯",
  },
];

export const priceNotes = [
  "※ 初回はカウンセリング・検査の時間を含みます。",
  "※ お支払いは現金・各種クレジットカード・電子マネーに対応しております。",
  "※ 表示価格はすべて税込価格です。",
];
