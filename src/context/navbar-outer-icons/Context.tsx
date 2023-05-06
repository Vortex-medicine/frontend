import { RefObject, createContext, useContext, useRef } from "react";

interface NavbarOuterIconsRefElements {
  hamburgerElement: RefObject<HTMLDivElement>;
  cartElement: RefObject<SVGSVGElement>;
  logoElement: RefObject<HTMLDivElement>;
}

const NavbarOuterIconsContext =
  createContext<NavbarOuterIconsRefElements | null>(null);

interface NavbarOuterIconsContext {
  children: React.ReactNode;
}

export function NavbarOuterIconsProvider({
  children,
}: NavbarOuterIconsContext) {
  const refElements = {
    hamburgerElement: useRef<HTMLDivElement>(null),
    cartElement: useRef<SVGSVGElement>(null),
    logoElement: useRef<HTMLDivElement>(null),
  };

  return (
    <NavbarOuterIconsContext.Provider value={refElements}>
      {children}
    </NavbarOuterIconsContext.Provider>
  );
}

export function useNavbarOuterIcons() {
  const context = useContext(NavbarOuterIconsContext);

  if (!context) {
    throw new Error("navbarOuterIcons context is null");
  }

  return context;
}
