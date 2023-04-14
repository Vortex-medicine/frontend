import styles from "./styles.module.scss";
import { useEffect, useRef, useState } from "react";
import NavbarOverlay from "@/components/modules/header/SmallScreenNavbarOverlay";
import NavbarVisibleArea from "@/components/modules/header/NavbarVisibleArea";
import { HamburgerElementProvider } from "@/context/navbar-outer-icons/Context";
import classNames from "classnames";

function Header(): JSX.Element {
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

  const headerClasses = classNames(styles.header, {
    [styles.headerIsScrolled]: headerIsScrolled,
  });

  return (
    <header ref={headerElement} className={headerClasses}>
      <nav className={styles.navbar}>
        <HamburgerElementProvider>
          <NavbarVisibleArea
            menuIsOpened={menuIsOpened}
            setMenuIsOpened={setMenuIsOpened}
          />
          <NavbarOverlay
            menuIsOpened={menuIsOpened}
            setMenuIsOpened={setMenuIsOpened}
          />
        </HamburgerElementProvider>
      </nav>
    </header>
  );
}

export default Header;
