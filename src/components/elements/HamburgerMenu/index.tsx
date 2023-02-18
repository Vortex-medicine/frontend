import { Dispatch, SetStateAction } from "react";
import styles from "./styles.module.scss";

interface MenuToggleProps {
  isOpened: boolean;
  setIsOpened: Dispatch<SetStateAction<boolean>>;
  className?: string;
}

function MenuToggle({
  isOpened,
  setIsOpened,
  className = "",
}: MenuToggleProps): JSX.Element {
  return (
    <div
      className={`${styles["menu-toggle"]} ${
        isOpened ? styles["menu-toggle--opened"] : ""
      } ${className}`}
      onClick={() => setIsOpened(!isOpened)}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default MenuToggle;
