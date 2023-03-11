import "normalize.css/normalize.css";

import "@/styles/globals.scss";

import { AppProps } from "next/app";
import { Noto_Sans } from "@next/font/google";

const noto = Noto_Sans({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["cyrillic", "latin"],
});

// const segoui = localFont({
//   src: [
//     {
//       path: '../../public/fonts/SegoeUI.woff2',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: '../../public/fonts/SegoeUI-Bold.woff2',
//       weight: '700',
//       style: 'normal',
//     },
//     {
//       path: '../../public/fonts/SegoeUI-SemiBold.woff2',
//       weight: '600',
//       style: 'normal',
//     },
//     {
//       path: '../../public/fonts/SegoeUI-Italic.woff2',
//       weight: '400',
//       style: 'italic',
//     },
//     {
//       path: '../../public/fonts/SegoeUI-Light.woff2',
//       weight: '300',
//       style: 'normal',
//     },
//     {
//       path: '../../public/fonts/SegoeUI-BoldItalic.woff2',
//       weight: '700',
//       style: 'italic',
//     },
//   ],
// });

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
