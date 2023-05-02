import { useEffect } from "react";

function useMobileDetect(setIsMobile: (isMobile: boolean) => void) {
  useEffect(() => {
    function handleResize() {
      if (/Android|iPhone/i.test(navigator.userAgent)) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [setIsMobile]);
}

export default useMobileDetect;
