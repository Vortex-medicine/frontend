import React from "react";
import styles from "./styles.module.scss";
import Schema from "@/components/modules/home-page/NoSideEffectsSchema";
import Container from "@/components/elements/Container";
import Image from "next/image";

function NoSideEffects() {
  return (
    <section className={styles.noSideEffectsSection}>
      <Container>
        <Schema />
        <h2 className={styles.heading}>Без побічних ефектів</h2>
        <div className={styles.contentWrapper}>
          <div className={styles.textBlock}>
            <p>
              Усі шкідники організму&nbsp;— чужорідні структури. Більшість
              чужорідних структур мають закільцьовану форму. Завдяки
              закільцьованій формі чужорідні структури дуже міцні,
              тому&nbsp;організм не&nbsp;може самостійно з&nbsp;ними впоратися.
            </p>
            <p>
              Щоб&nbsp;допомогти організму дістатися до&nbsp;чужорідних
              структур, потрібно розбити їх&nbsp;закільцьовану форму.
              Щоб&nbsp;розбити закільцьовану форму, потрібно створити
              в&nbsp;просторі механічні вібрації. Такі&nbsp;ж&nbsp;вібрації
              розбивають келих, якщо&nbsp;налаштувати звук на&nbsp;одну
              і&nbsp;ту&nbsp;ж частоту з&nbsp;цим&nbsp;келихом.
            </p>
            <p>
              Щоб&nbsp;створити механічні вібрації, потрібні 2&nbsp;прилади:
              генератор синуса і&nbsp;котушка Мішина. Котушку Мишина підключаємо
              до&nbsp;генератора синуса. Кладемо котушку на&nbsp;тіло. Навколо
              котушки створюється електростатичний вихор. Електростатичний
              вихор&nbsp;— це&nbsp;і&nbsp;є механічні вібрації,
              які&nbsp;руйнують закільцьовані форми.
            </p>
            <p>
              Коли&nbsp;закільцьована форма розбита, організм самостійно доламує
              чужорідну структуру і&nbsp;виводить залишки від&nbsp;неї через
              фільтри: нирки, шкіру, слизову оболонку. Організм працює
              самостійно, тож&nbsp;побічних ефектів немає.
            </p>
          </div>
          <div className={styles.glassExample}>
            <div className={styles.glassImageWrapper}>
              <Image
                unoptimized
                src="/images/breaking-glass.png"
                alt="breaking glass"
                fill
              />
            </div>
            <p className={styles.glassImageCaption}>
              Котушка Мішина розбиває закільцьовані чужорідні структури
              за&nbsp;схожим принципом, як&nbsp;вібрації звуку розбивають келих.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default NoSideEffects;
