import "normalize.css/normalize.css";

import "@/styles/globals.scss";

import { AppProps } from "next/app";
import { Noto_Sans } from "@next/font/google";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { CartProvider } from "@/context/cart/Context";

const noto = Noto_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["cyrillic", "latin"],
});

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    tablet: true;
    desktop: true;
    cart: true;
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      tablet: 700,
      desktop: 1200,
      cart: 1100,
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
