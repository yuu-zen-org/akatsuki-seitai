import type { FAQ } from "@/types";

export const faqs: FAQ[] = [
  {
    id: "reservation",
    question: "予約は必要ですか？",
    answer:
      "はい、完全予約制です。お電話、LINE、またはお問い合わせフォームからご予約ください。",
    category: "予約",
  },
  {
    id: "first-visit",
    question: "初めてですが、どのような流れですか？",
    answer:
      "まずカウンセリングで症状やお悩みを伺い、検査を行います。その後、お身体の状態に合わせた施術を行い、今後の方針をご説明します。",
    category: "施術",
  },
  {
    id: "pain",
    question: "施術は痛いですか？",
    answer:
      "ボキボキと骨を鳴らすような施術は行いません。お身体に負担の少ない、やさしい施術を心がけています。",
    category: "施術",
  },
  {
    id: "clothing",
    question: "どんな服装で行けばいいですか？",
    answer:
      "動きやすい服装でお越しください。ジーンズやスカートは避けていただくとスムーズです。お着替えのご用意もあります。",
    category: "来院",
  },
  {
    id: "parking",
    question: "駐車場はありますか？",
    answer: "はい、院の前に専用駐車場がございます。",
    category: "アクセス",
  },
  {
    id: "insurance",
    question: "保険は使えますか？",
    answer:
      "当院は自費の整体院のため、健康保険の適用はございません。",
    category: "料金",
  },
  {
    id: "frequency",
    question: "どのくらいの頻度で通えばいいですか？",
    answer:
      "症状や状態によりますが、最初は週1回程度、改善に伴い間隔を空けていくことが多いです。初回時にご提案いたします。",
    category: "施術",
  },
];
