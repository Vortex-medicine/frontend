import React, { Dispatch, SetStateAction } from "react";
import styles from "./styles.module.scss";
import Container from "@/components/elements/Container";
import NavbarOuterButtons from "../NavbarOuterButtons";
import NavbarLogo from "@/components/elements/header/NavbarLogo";
import BigScreenNavbarPages from "@/components/modules/header/BigScreenNavbarPages";
import { useRouter } from "next/router";
import Link from "next/link";

interface NavbarVisibleAreaProps {
  menuIsOpened: boolean;
  setMenuIsOpened: Dispatch<SetStateAction<boolean>>;
}

function NavbarVisibleArea({
  menuIsOpened,
  setMenuIsOpened,
}: NavbarVisibleAreaProps): JSX.Element {
  const router = useRouter();

  const mainPageIsActive = router.pathname === "/";

  return (
    <Container className={styles.navbarVisibleArea}>
      <div className={styles.bigScreenLogoPagesWrapper}>
        {mainPageIsActive ? (
          <NavbarLogo menuIsOpened={menuIsOpened} />
        ) : (
          <Link href="/" className={styles.mainPageLink}>
            <NavbarLogo menuIsOpened={menuIsOpened} />
          </Link>
        )}

        <BigScreenNavbarPages />
      </div>

      <NavbarOuterButtons
        menuIsOpened={menuIsOpened}
        setMenuIsOpened={setMenuIsOpened}
      />
    </Container>
  );
}

export default NavbarVisibleArea;
