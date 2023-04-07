import "normalize.css/normalize.css";

import "@/styles/globals.scss";

import { AppProps } from "next/app";
import { Noto_Sans } from "@next/font/google";

const noto = Noto_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["cyrillic", "latin"],
});

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <style jsx global>{`
        :root {
          --noto-font: ${noto.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
