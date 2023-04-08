import styles from "./styles.module.scss";
import InnerButtons from "@/components/modules/header/SmallScreenNavbarInnerButtons";
import Pages from "@/components/modules/header/SmallScreenNavbarPages";
import classNames from "classnames";
import { Dispatch, SetStateAction, useRef } from "react";
import useOutsideClick from "@/hooks/use-outside-click";
import { useNavbarOuterIcons } from "@/context/navbar-outer-icons/Context";
import { useCart } from "@/context/cart/Context";

interface SmallScreenNavbarOverlayProps {
  menuIsOpened: boolean;
  setMenuIsOpened: Dispatch<SetStateAction<boolean>>;
}

function SmallScreenNavbarOverlay({
  menuIsOpened,
  setMenuIsOpened,
}: SmallScreenNavbarOverlayProps): JSX.Element {
  const overlayElement = useRef<HTMLDivElement>(null);
  const navbarOuterIcons = useNavbarOuterIcons();

  const { hamburgerElement, cartElement } = navbarOuterIcons;
  const { cartModalElement } = useCart();

  useOutsideClick(
    [cartModalElement, overlayElement, hamburgerElement, cartElement],
    () => setMenuIsOpened(false)
  );

  const overlayClasses = classNames("overlay", styles.overlay, {
    [styles.overlayOpened]: menuIsOpened,
  });

  return (
    <div ref={overlayElement} className={overlayClasses}>
      <Pages menuIsOpened={menuIsOpened} />
      <InnerButtons menuIsOpened={menuIsOpened} />
    </div>
  );
}

export default SmallScreenNavbarOverlay;
