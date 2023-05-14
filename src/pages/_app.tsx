import "normalize.css/normalize.css";

import "@/styles/globals.scss";

import { AppProps } from "next/app";
import { Noto_Sans } from "@next/font/google";
import { ThemeProvider } from "@emotion/react";
import { CartProvider } from "@/context/cart/Context";
import { createTheme } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";
import AddToCartSuccessAlert from "@/components/elements/AddToCartSuccessAlert";
import Cart from "@/components/modules/Cart";
import { appWithTranslation } from "next-i18next";
import { ProductsProvider } from "@/context/products/Context";

const noto = Noto_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["cyrillic", "latin"],
});

const theme = createTheme({
  breakpoints: {
    values: {
      tablet: 700,
      desktop: 1200,
      cart: 1100,
    },
  },
  palette: {
    blue: {
      main: "#27A2FB",
    },
    darkGrey: {
      main: "#BFBFBF",
    },
    orange: {
      main: "#F1521F",
    },
    green: {
      main: "#82BF1A",
    },
  },
});

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <style jsx global>{`
        :root {
          --noto-font: ${noto.style.fontFamily};
        }
      `}</style>
      <ProductsProvider>
        <CartProvider>
          <ThemeProvider theme={theme}>
            <SnackbarProvider
              Components={{
                addToCartAlert: AddToCartSuccessAlert,
              }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Component {...pageProps} />
              <Cart />
            </SnackbarProvider>
          </ThemeProvider>
        </CartProvider>
      </ProductsProvider>
    </>
  );
}

export default appWithTranslation(App);
