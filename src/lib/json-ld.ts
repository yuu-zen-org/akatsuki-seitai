import { siteConfig } from "./site-config";
import type { BreadcrumbItem, FAQ, Symptom } from "@/types";

export function generateLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HealthAndBeautyBusiness"],
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    priceRange: "¥¥",
    currenciesAccepted: "JPY",
    paymentAccepted: "Cash, Credit Card, Electronic Money",
    address: {
      "@type": "PostalAddress",
      postalCode: siteConfig.address.postalCode,
      addressRegion: siteConfig.address.prefecture,
      addressLocality: siteConfig.address.city,
      streetAddress: siteConfig.address.street,
      addressCountry: "JP",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.3176,
      longitude: 140.8897,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday", "Tuesday", "Wednesday", "Thursday",
          "Friday", "Saturday", "Sunday",
        ],
        opens: "10:00",
        closes: "19:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "仙台市" },
      { "@type": "AdministrativeArea", name: "仙台市泉区" },
    ],
    hasMap: `https://maps.google.com/?q=${encodeURIComponent(siteConfig.address.full)}`,
    sameAs: [
      siteConfig.social.line,
    ].filter(Boolean),
  };
}

export function generateOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/common/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phone,
      contactType: "reservations",
      areaServed: "JP",
      availableLanguage: "Japanese",
    },
  };
}

export function generateWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };
}

export function generateFAQPageJsonLd(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.href}`,
    })),
  };
}

export function generateMedicalWebPageJsonLd(symptom: Symptom) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `${siteConfig.url}/symptoms/${symptom.slug}#webpage`,
    name: `${symptom.name}の改善｜${siteConfig.name}`,
    description: symptom.description,
    url: `${siteConfig.url}/symptoms/${symptom.slug}`,
    about: {
      "@type": "MedicalCondition",
      name: symptom.name,
    },
    mainContentOfPage: {
      "@type": "WebPageElement",
      cssSelector: "main",
    },
    provider: {
      "@id": `${siteConfig.url}/#localbusiness`,
    },
  };
}
