import styles from "./styles.module.scss";
import HamburgerMenu from "@/components/elements/HamburgerMenu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { Dispatch, SetStateAction } from "react";

interface SmallScreenNavbarOuterButtonsProps {
  isOpened: boolean;
  setIsOpened: Dispatch<SetStateAction<boolean>>;
}

function SmallScreenNavbarOuterButtons({
  isOpened,
  setIsOpened,
}: SmallScreenNavbarOuterButtonsProps): JSX.Element {
  return (
    <div className={styles["small-screen-navbar-outer-buttons"]}>
      <ShoppingCartOutlinedIcon
        className={`${styles["small-screen-navbar-outer-buttons__cart-icon"]} ${
          isOpened
            ? styles["small-screen-navbar-outer-buttons__cart-icon--opened"]
            : ""
        }`}
      />
      <HamburgerMenu
        isOpened={isOpened}
        setIsOpened={setIsOpened}
        className={styles["small-screen-navbar-outer-buttons__hamburger-icon"]}
      />
    </div>
  );
}

export default SmallScreenNavbarOuterButtons;
