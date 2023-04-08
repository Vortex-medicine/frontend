import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { useCart } from "@/context/cart/Context";
import { useMediaQuery } from "@mui/material";
import VIEWPORT_BOUNDS from "@/constants/viewport-bounds";
import { CloseRounded } from "@mui/icons-material";
import styles from "./styles.module.scss";
import Container from "@/components/elements/Container";

export default function Cart() {
  const { cartIsOpened, cartModalElement, handleCartIsOpened } = useCart();

  const noFullScreen = useMediaQuery(
    `(min-width: ${VIEWPORT_BOUNDS.tablet}px)`
  );
  const [fullScreen, fullWidth] = noFullScreen ? [false, true] : [true, false];

  return (
    <Dialog
      className={styles.cartModal}
      ref={cartModalElement}
      sx={{
        "& .MuiDialogContent-root": {
          padding: "0",
          overflowY: "hidden",
        },
        "& .MuiPaper-root": {
          width: { tablet: "calc(100% - 90px)" },
          margin: { tablet: "45px" },
        },
      }}
      open={cartIsOpened}
      fullScreen={fullScreen}
      fullWidth={fullWidth}
      maxWidth="cart"
      onClose={() => handleCartIsOpened(false)}
    >
      <DialogContent>
        <div className={styles.modelTitleOuterWrapper}>
          <Container className={styles.modelTitleInnerContainer}>
            <h2>Корзина</h2>
            <button
              className={styles.closeModalBtn}
              onClick={() => handleCartIsOpened(false)}
            >
              <CloseRounded />
            </button>
          </Container>
        </div>
      </DialogContent>
    </Dialog>
  );
}
