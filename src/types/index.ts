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

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface Voice {
  id: string;
  age: string;
  gender: string;
  symptom: string;
  title: string;
  content: string;
  rating: number;
  imagePath: string;
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

export interface Recommend {
  id: string;
  name: string;
  title: string;
  role: string;
  quote: string;
  imagePath: string;
}
