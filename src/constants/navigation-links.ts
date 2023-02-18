import { PageLinkData, SubmenuData } from "@/types/navigation";

const PAGES: Array<PageLinkData | SubmenuData> = [
  {
    name: "Лечение",
    href: "/treatment",
  },
  {
    name: "Отзывы",
    href: "/reviews",
  },
  {
    name: "Комплекты приборов",
    href: "/reviews",
  },
  {
    globalName: "Схемы приборов",
    pages: [
      {
        name: "Катушка Мишина",
        href: "/mishin-coil-schema",
      },
      {
        name: "Генератор синуса",
        href: "/sinus-generator-schema",
      },
    ],
  },
  {
    name: "Новости",
    href: "/news",
  },
  {
    name: "Контакты",
    href: "/contacts",
  },
];

export default PAGES;
