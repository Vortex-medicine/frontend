import "normalize.css/normalize.css";

import "@/styles/globals.scss";

import { AppProps } from "next/app";
import { Noto_Sans } from "@next/font/google";
import { ThemeProvider } from "@emotion/react";
import { CartProvider } from "@/context/cart/Context";
import { createTheme } from "@mui/material/styles";

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
  },
});

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <style jsx global>{`
        :root {
          --noto-font: ${noto.style.fontFamily};
        }
      `}</style>
      <CartProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </CartProvider>
    </>
  );
}
