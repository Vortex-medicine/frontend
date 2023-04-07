import React from "react";
import styles from "./styles.module.scss";
import Container from "@/components/elements/Container";
import ProductCard from "@/components/elements/kits-page/ProductCard";
import Sidebar from "@/components/modules/kits-page/Sidebar";

function KitsPage(): JSX.Element {
  return (
    <>
      <Container>
        <h1 className={styles.heading}>
          Комплекты приборов для вихревой медицины
        </h1>
        <div className={styles.contentWrapper}>
          <ul className={styles.productList}>
            <li className={styles.productItem}>
              <ProductCard
                productName={"KGS"}
                productDescr={"Cредний по\u00A0стоимости вариант."}
                productImg={{
                  path: "/kgs-kit.jpg",
                  width: 3436,
                  height: 1730,
                }}
                productPrice={4900}
              />
            </li>
            <li className={styles.productItem}>
              <ProductCard
                productName={"KGS-MINI"}
                productDescr={
                  "Бюджетный вариант, простой в\u00A0использовании, с\u00A0минимальной функциональностью."
                }
                productImg={{
                  path: "/kgs-mini-kit.jpg",
                  width: 4032,
                  height: 2528,
                }}
                productPrice={3000}
              />
            </li>
            <li className={styles.productItem}>
              <ProductCard
                productName={"KGS-MAX"}
                productDescr={
                  "Включает комплект KGS и\u00A0статическую катушку."
                }
                productImg={{
                  path: "/kgs-mini-kit.jpg",
                  width: 2276,
                  height: 1030,
                }}
                productPrice={6300}
                discountInfo="Сэкономите 100 грн"
              />
            </li>
          </ul>
          <Sidebar />
        </div>
      </Container>
    </>
  );
}

export default KitsPage;
