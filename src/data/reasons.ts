export interface Reason {
  number: string;
  title: string;
  description: string;
  imagePath: string;
  accentColor: "green" | "green" | "pink";
}

export const reasons: Reason[] = [
  {
    number: "01",
    title: "丁寧なカウンセリングと\nオーダーメイドの施術",
    description:
      "お話をしっかり伺い、体の状態を丁寧に評価。あなただけの施術プランをご提案します。",
    imagePath: "/images/top/reason-01.png",
    accentColor: "green",
  },
  {
    number: "02",
    title: "落ち着いたプライベート\n空間でリラックス",
    description:
      "マンションの一室の静かな空間で、周りを気にせずリラックスして施術を受けていただけます。",
    imagePath: "/images/top/reason-02.png",
    accentColor: "green",
  },
  {
    number: "03",
    title: "再発しにくい\n体づくりをサポート",
    description:
      "施術だけでなく、日常生活のポイントやセルフケアもお伝えし、良い状態を長く保てる体づくりをサポートします。",
    imagePath: "/images/top/reason-03.png",
    accentColor: "pink",
  },
];
