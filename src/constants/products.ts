import { ProductData } from "@/types/product";

export const ALL_PRODUCTS: ProductData[] = [
  {
    id: "1",
    name: "KGS",
    descr: "Середній за\u00A0вартістю варіант.",
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
      "Бюджетний варіант, простий у\u00A0використанні, з\u00A0мінімальною функціональністю.",
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
    descr: "Включає комплект KGS і\u00A0статичну котушку.",
    img: {
      path: "/kgs-mini-kit.jpg",
      width: 2276,
      height: 1030,
    },
    price: 6300,
    discountInfo: "Сэкономите 100 грн",
  },
];
