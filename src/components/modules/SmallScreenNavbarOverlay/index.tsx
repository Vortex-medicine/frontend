import styles from "./styles.module.scss";
import InnerButtons from "@/components/modules/SmallScreenNavbarInnerButtons";
import Pages from "@/components/modules/SmallScreenNavbarPages";

interface SmallScreenNavbarOverlayProps {
  menuIsOpened: boolean;
}

function SmallScreenNavbarOverlay({
  menuIsOpened,
}: SmallScreenNavbarOverlayProps) {
  return (
    <div
      className={`${styles.overlay} ${
        menuIsOpened ? styles.overlayOpened : ""
      }`}
    >
      <Pages menuIsOpened={menuIsOpened} />
      <InnerButtons />
    </div>
  );
}

export default SmallScreenNavbarOverlay;
