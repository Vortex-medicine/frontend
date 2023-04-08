import { useNavbarOuterIcons } from "@/context/navbar-outer-icons/Context";
import styles from "./styles.module.scss";
import HamburgerMenu from "@/components/elements/header/HamburgerMenu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import classNames from "classnames";
import LanguageDropdown from "@/components/modules/header/NavbarLanguageDropdown";

import { Dispatch, SetStateAction } from "react";
import { useCart } from "@/context/cart/Context";

interface SmallScreenNavbarOuterButtonsProps {
  menuIsOpened: boolean;
  setMenuIsOpened: Dispatch<SetStateAction<boolean>>;
}

function NavbarOuterButtons({
  menuIsOpened,
  setMenuIsOpened,
}: SmallScreenNavbarOuterButtonsProps): JSX.Element {
  const { cartIsOpened, handleCartIsOpened } = useCart();

  const cartIconClasses = classNames(styles.cartIcon, {
    [styles.cartIconMenuOpened]: menuIsOpened,
    [styles.cartIconCartOpened]: cartIsOpened,
  });

  const navbarOuterIcons = useNavbarOuterIcons();

  const { hamburgerElement, cartElement } = navbarOuterIcons;

  return (
    <div className={styles.outerButtons}>
      <LanguageDropdown className={styles.languageIcon} />
      <div
        className={styles.cartIconWrapper}
        onClick={() => handleCartIsOpened(true)}
      >
        <ShoppingCartOutlinedIcon
          ref={cartElement}
          className={cartIconClasses}
        />
      </div>
      <HamburgerMenu
        ref={hamburgerElement}
        isOpened={menuIsOpened}
        setIsOpened={setMenuIsOpened}
        className={styles.hamburgerIcon}
      />
    </div>
  );
}

export default NavbarOuterButtons;
