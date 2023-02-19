import { useNavbarOuterIcons } from "@/context/navbar-outer-icons/Context";
import styles from "./styles.module.scss";
import HamburgerMenu from "@/components/elements/HamburgerMenu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import classNames from "classnames";

import { Dispatch, SetStateAction } from "react";

interface SmallScreenNavbarOuterButtonsProps {
  isOpened: boolean;
  setIsOpened: Dispatch<SetStateAction<boolean>>;
}

function SmallScreenNavbarOuterButtons({
  isOpened,
  setIsOpened,
}: SmallScreenNavbarOuterButtonsProps): JSX.Element {
  const cartIconClasses = classNames(styles.cartIcon, {
    [styles.cartIconOpened]: isOpened,
  });

  const navbarOuterIcons = useNavbarOuterIcons();

  if (navbarOuterIcons === null) {
    throw new Error("navbarOuterIcons is null");
  }

  const { hamburgerElement, cartElement } = navbarOuterIcons;

  return (
    <div className={styles.outerButtons}>
      <ShoppingCartOutlinedIcon ref={cartElement} className={cartIconClasses} />
      <HamburgerMenu
        ref={hamburgerElement}
        isOpened={isOpened}
        setIsOpened={setIsOpened}
        className={styles.hamburgerIcon}
      />
    </div>
  );
}

export default SmallScreenNavbarOuterButtons;
