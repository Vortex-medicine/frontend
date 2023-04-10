import { ProductData } from "@/types/product";

export const ALL_PRODUCTS: ProductData[] = [
  {
    id: "1",
    name: "KGS",
    descr: "Cредний по\u00A0стоимости вариант.",
    img: {
      path: "/kgs-kit.jpg",
      width: 3436,
      height: 1730,
    },
    price: 4900,
  },
  {
    id: "2",
    name: "KGS-MINI",
    descr:
      "Бюджетный вариант, простой в\u00A0использовании, с\u00A0минимальной функциональностью.",
    img: {
      path: "/kgs-mini-kit.jpg",
      width: 4032,
      height: 2528,
    },
    price: 3000,
  },
  {
    id: "3",
    name: "KGS-MAX",
    descr: "Включает комплект KGS и\u00A0статическую катушку.",
    img: {
      path: "/kgs-mini-kit.jpg",
      width: 2276,
      height: 1030,
    },
    price: 6300,
    discountInfo: "Сэкономите 100 грн",
  },
];
