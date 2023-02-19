import { Dispatch, ForwardedRef, SetStateAction, forwardRef } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

interface MenuToggleProps {
  isOpened: boolean;
  setIsOpened: Dispatch<SetStateAction<boolean>>;
  className?: string;
}

const MenuToggle = function MenuToggle(
  { isOpened, setIsOpened, className = "" }: MenuToggleProps,
  hamburgerElement: ForwardedRef<HTMLDivElement>
): JSX.Element {
  const hamburgerElementClasses = classNames(styles.menuToggle, className, {
    [styles.menuToggleOpened]: isOpened,
  });

  return (
    <div
      ref={hamburgerElement}
      className={hamburgerElementClasses}
      onClick={() => setIsOpened(!isOpened)}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default forwardRef(MenuToggle);
