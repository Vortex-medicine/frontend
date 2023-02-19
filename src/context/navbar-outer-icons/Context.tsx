import { RefObject, createContext, useContext, useRef } from "react";

interface NavbarOuterIconsRefElements {
  hamburgerElement: RefObject<HTMLDivElement>;
  cartElement: RefObject<SVGSVGElement>;
}

const NavbarOuterIconsContext =
  createContext<NavbarOuterIconsRefElements | null>(null);

interface NavbarOuterIconsContext {
  children: React.ReactNode;
}

export function HamburgerElementProvider({
  children,
}: NavbarOuterIconsContext) {
  const refElements = {
    hamburgerElement: useRef<HTMLDivElement>(null),
    cartElement: useRef<SVGSVGElement>(null),
  };

  return (
    <NavbarOuterIconsContext.Provider value={refElements}>
      {children}
    </NavbarOuterIconsContext.Provider>
  );
}

export function useNavbarOuterIcons() {
  return useContext(NavbarOuterIconsContext);
}
