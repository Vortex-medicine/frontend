import { useMediaQuery } from "react-responsive";
import VIEWPORT_BOUNDS from "@/constants/viewport-bounds";

const { tablet, desktop } = VIEWPORT_BOUNDS;

export function useTabletMediaQuery() {
  return useMediaQuery({ query: `(min-width: ${tablet}px)` });
}

export function useDesktopMediaQuery() {
  return useMediaQuery({ query: `(min-width: ${desktop}px)` });
}
