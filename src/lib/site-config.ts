export const siteConfig = {
  name: "楓月整体院",
  nameKana: "ふうげつせいたいいん",
  nameRomaji: "akatsuki",
  branch: "泉中央院",
  description:
    "仙台市泉区の整体院。腰痛・肩こり・首の痛み・膝の痛み・股関節痛でお悩みの方へ。痛みの原因を丁寧に見極め、根本から整えることで再発しにくい身体づくりをサポートします。",
  url: "https://akatsuki-seitai.com",
  ogImage: "/images/ogp.jpg",
  locale: "ja_JP",

  contact: {
    phone: "022-725-4546",
    phoneHref: "tel:0227254546",
    email: "info@akatsuki-seitai.com",
    lineUrl: "https://lin.ee/XXXXXXXXX",
    lineId: "@akatsuki-seitai",
  },

  address: {
    postalCode: "981-3133",
    prefecture: "宮城県",
    city: "仙台市泉区",
    street: "泉中央4-18-2 グランフェリーチェ105",
    full: "宮城県仙台市泉区泉中央4-18-2 グランフェリーチェ105",
  },

  business: {
    openingHours: [
      { day: "月〜土", hours: "10:00〜19:00" },
    ],
    closedDay: "不定休・土日祝も営業",
    parking: "無料駐車場あり",
    access: "泉中央駅徒歩6分",
    accessSub: "八乙女駅より徒歩15分",
  },

  social: {
    instagram: "",
    line: "https://lin.ee/XXXXXXXXX",
  },

  seo: {
    area: "仙台市泉区",
    symptoms: ["腰痛", "首の痛み", "肩こり", "膝の痛み", "股関節痛"],
  },
} as const;

export type SiteConfig = typeof siteConfig;
