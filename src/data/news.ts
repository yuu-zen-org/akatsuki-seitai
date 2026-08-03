export interface NewsItem {
  id: string;
  date: string;
  category: "お知らせ" | "キャンペーン" | "休診情報";
  title: string;
}

export const news: NewsItem[] = [
  {
    id: "news-001",
    date: "2026-08-20",
    category: "お知らせ",
    title: "ホームページをリニューアルしました。",
  },
];
