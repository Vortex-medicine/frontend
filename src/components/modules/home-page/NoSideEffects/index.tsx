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
        <h2 className={styles.heading}>Без побочных эффектов</h2>
        <div className={styles.contentWrapper}>
          <div className={styles.textBlock}>
            <p>
              Все вредители организма&nbsp;— чужеродные структуры. Большинство
              чужеродных структур имеют закольцованную форму. Благодаря
              закольцованной форме чужеродные структуры очень прочные, поэтому
              организм не&nbsp;может самостоятельно с&nbsp;ними справиться.
            </p>
            <p>
              Чтобы помочь организму добраться до&nbsp;чужеродных структур,
              нужно разбить их закольцованную форму. Чтобы разбить
              закольцованную форму, нужно создать в&nbsp;пространстве
              механические вибрации. Такие же вибрации разбивают бокал, если
              настроить звук на&nbsp;одну и&nbsp;ту&nbsp;же частоту
              с&nbsp;бокалом.
            </p>
            <p>
              Чтобы создать механические вибрации, нужны 2&nbsp;прибора:
              генератор синуса и&nbsp;катушка Мишина. Катушку Мишина подключаем
              к&nbsp;генератору синуса. Кладём катушку на&nbsp;тело. Вокруг
              катушки создается электростатический вихрь. Электростатический
              вихрь&nbsp;— это и&nbsp;есть механические вибрации, которые
              разрушают закольцованные формы.
            </p>
            <p>
              Когда закольцованная форма разбита, организм самостоятельно
              доламывает чужеродную структуру и&nbsp;выводит остатки от&nbsp;неё
              через фильтры: почки, кожу, слизистую оболочку. Организм работает
              самостоятельно, поэтому побочных эффектов нет.
            </p>
          </div>
          <div className={styles.glassExample}>
            <div className={styles.glassImageWrapper}>
              <Image
                unoptimized
                src="/breaking-glass.png"
                alt="breaking glass"
                fill
              />
            </div>
            <p className={styles.glassImageCaption}>
              Катушка Мишина разбивает закольцованные чужеродные структуры
              по&nbsp;похожему принципу, как&nbsp;вибрации звука разбивают
              бокал.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default NoSideEffects;
