import { RefObject, useEffect } from "react";

function useOutsideClick(
  refs: Array<RefObject<Element> | undefined>,
  callback: () => void
) {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      let targetClickIsOutsideRefs = true;
      for (const ref of refs) {
        if (ref && ref.current && ref.current.contains(e.target as Node)) {
          targetClickIsOutsideRefs = false;
        }
      }

      if (targetClickIsOutsideRefs) {
        callback();
      }
    }

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [refs, callback]);
}

export default useOutsideClick;
