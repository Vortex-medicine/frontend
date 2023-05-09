import { PageLinkData, SubmenuData } from "@/types/navigation";

export const PAGE_HREFS = {
  TREATMENT: "/treatment",
  REVIEWS: "/reviews",
  EXPERIENCE_SHARING_FILES: "/experience-sharing-files",
  KITS: "/kits",
  MISHIN_COIL_SCHEMA: "/mishin-coil-schema",
  SINUS_GENERATOR_SCHEMA: "/sinus-generator-schema",
  ARTICLES: "/articles",
  CONTACTS: "/contacts",
  CHECKOUT: "/checkout",
  ORDER_SUCCESS: "/order-success",
};

export const PAGES: Array<PageLinkData | SubmenuData> = [
  {
    name: "Лікування",
    href: PAGE_HREFS.TREATMENT,
  },
  {
    name: "Відгуки",
    href: PAGE_HREFS.REVIEWS,
  },
  {
    name: "Комплекти приладів",
    href: PAGE_HREFS.KITS,
  },
  {
    globalName: "Схеми приладів",
    pages: [
      {
        name: "Котушка Мішина",
        href: PAGE_HREFS.MISHIN_COIL_SCHEMA,
      },
      {
        name: "Генератор синуса",
        href: PAGE_HREFS.SINUS_GENERATOR_SCHEMA,
      },
    ],
  },
  {
    name: "Cтатті",
    href: PAGE_HREFS.ARTICLES,
  },
  {
    name: "Контакти",
    href: PAGE_HREFS.CONTACTS,
  },
];
