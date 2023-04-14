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
};

export const PAGES: Array<PageLinkData | SubmenuData> = [
  {
    name: "Лечение",
    href: PAGE_HREFS.TREATMENT,
  },
  {
    name: "Отзывы",
    href: PAGE_HREFS.REVIEWS,
  },
  {
    name: "Комплекты приборов",
    href: PAGE_HREFS.KITS,
  },
  {
    globalName: "Схемы приборов",
    pages: [
      {
        name: "Катушка Мишина",
        href: PAGE_HREFS.MISHIN_COIL_SCHEMA,
      },
      {
        name: "Генератор синуса",
        href: PAGE_HREFS.SINUS_GENERATOR_SCHEMA,
      },
    ],
  },
  {
    name: "Cтатьи",
    href: PAGE_HREFS.ARTICLES,
  },
  {
    name: "Контакты",
    href: PAGE_HREFS.CONTACTS,
  },
];
