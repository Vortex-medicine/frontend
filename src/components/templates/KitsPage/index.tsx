import React from "react";
import styles from "./styles.module.scss";
import Container from "@/components/elements/Container";
import ProductCard from "@/components/elements/kits-page/ProductCard";
import Sidebar from "@/components/modules/kits-page/Sidebar";
import { ALL_PRODUCTS } from "@/constants/products";

function KitsPage(): JSX.Element {
  return (
    <>
      <Container>
        <h1 className={styles.heading}>
          Комплекти приладів для&nbsp;вихрової медицини
        </h1>
        <div className={styles.contentWrapper}>
          <ul className={styles.productList}>
            {ALL_PRODUCTS.map((product) => (
              <li className={styles.productItem} key={product.id}>
                <ProductCard productData={product} />
              </li>
            ))}
          </ul>
          <Sidebar />
        </div>
      </Container>
    </>
  );
}

export default KitsPage;
