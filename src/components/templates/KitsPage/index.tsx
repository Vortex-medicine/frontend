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
              <ProductCard />
            </li>
          </ul>
          <Sidebar />
        </div>
      </Container>
    </>
  );
}

export default KitsPage;
