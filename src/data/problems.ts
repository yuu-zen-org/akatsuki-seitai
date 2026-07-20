export interface Problem {
  id: string;
  text: string;
  imagePath: string;
}

export const problems: Problem[] = [
  { id: "shoulder", text: "慢性的な肩こり\n首こりが辛い", imagePath: "/images/top/nayami-01.png" },
  { id: "back", text: "腰の痛みがなかなか\n良くならない", imagePath: "/images/top/nayami-02.png" },
  { id: "headache", text: "頭痛や目の疲れが\n続いている", imagePath: "/images/top/nayami-03.png" },
  { id: "posture", text: "姿勢の悪さや\n体のゆがみが気になる", imagePath: "/images/top/nayami-04.png" },
  { id: "fatigue", text: "疲れが抜けず\n体が重だるい", imagePath: "/images/top/nayami-05.png" },
  { id: "aging", text: "年齢とともに\n体が動かしづらい", imagePath: "/images/top/nayami-06.png" },
];
