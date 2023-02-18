import styles from "./styles.module.scss";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Container from "@/components/elements/Container";
import SmallScreenNavbarOuterButtons from "@/components/modules/SmallScreenNavbarOuterButtons";
import SmallScreenNavbarOverlay from "@/components/modules/SmallScreenNavbarOverlay";

const Header = () => {
  const [menuIsOpened, setMenuIsOpened] = useState(false);
  const [headerIsScrolled, setHeaderIsScrolled] = useState(false);
  const headerElement = useRef<HTMLElement>(null);

  useEffect(() => {
    if (headerElement.current === null) {
      throw new Error("Header element is null");
    }

    const headerOffsetTop = headerElement.current.offsetTop;

    const onScroll = () => {
      if (window.pageYOffset > headerOffsetTop) {
        setHeaderIsScrolled(true);
      } else {
        setHeaderIsScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={headerElement}
      className={`${styles.header} ${
        headerIsScrolled ? styles.headerIsScrolled : ""
      }`}
    >
      <nav className={styles.navbar}>
        <Container className={styles.navbarVisibleArea}>
          <div className={styles.navbarLogoWrapper}>
            <Image
              src="/logo-white.png"
              alt="Vortex-medicine"
              width="100"
              height="26"
              className={styles.navbarLogo}
            />
            <Image
              src="/logo.png"
              alt="Vortex-medicine"
              width="100"
              height="26"
              className={`${styles.navbarLogo} ${
                menuIsOpened ? styles.navbarLogoIsTransparent : ""
              }`}
            />
          </div>

          <SmallScreenNavbarOuterButtons
            isOpened={menuIsOpened}
            setIsOpened={setMenuIsOpened}
          />
        </Container>

        <SmallScreenNavbarOverlay menuIsOpened={menuIsOpened} />
      </nav>
    </header>
  );
};

export default Header;
