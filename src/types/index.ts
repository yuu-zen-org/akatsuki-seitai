export interface NavItem {
  label: string;
  href: string;
}

export interface Treatment {
  id: string;
  name: string;
  description: string;
  duration: string;
  symptoms: string[];
}

export interface PriceCourse {
  id: string;
  name: string;
  description: string;
  price: string;
  note?: string;
}

export interface PriceItem {
  id: string;
  name: string;
  price: number;
  duration: string;
  description: string;
  isRecommended?: boolean;
}

export interface FAQCta {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
  cta?: FAQCta[];
}

export interface Voice {
  id: string;
  age: string;
  gender: string;
  symptom: string;
  title: string;
  content: string;
  rating: number;
  imagePath?: string;
  youtubeId?: string;
}

export interface Symptom {
  id: string;
  slug: string;
  name: string;
  description: string;
  imagePath?: string;
}

export interface FlowStep {
  step: number;
  title: string;
  description: string;
  imagePath: string;
}

export interface Feature {
  title: string;
  description: string;
  icon?: string;
}

export interface Staff {
  name: string;
  role: string;
  qualifications: string[];
  message: string;
  imagePath?: string;
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  content: string;
  category: "お知らせ" | "キャンペーン" | "休診情報";
}

export interface BreadcrumbItem {
  name: string;
  href: string;
}

export const RECOMMEND_CATEGORIES = [
  "医師・大学関係者",
  "理学療法士・柔道整復師・鍼灸師",
  "整体院・施術院経営者",
  "スポーツ・美容・介護関係者",
  "地域事業者・利用者",
] as const;

export type RecommendCategory = typeof RECOMMEND_CATEGORIES[number];

export interface Recommend {
  id: string;
  name: string;
  nameKana: string;
  slug: string;
  organization: string;
  role: string;
  category: RecommendCategory;
  title: string;
  summary: string;
  fullText?: string;
  image?: string;
  featured?: boolean;
  sortOrder: number;
}
