import "@mui/material";

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
  interface Palette {
    blue: Palette["primary"];
  }

  interface PaletteOptions {
    blue: PaletteOptions["primary"];
  }
}

declare module "@mui/material/IconButton" {
  interface IconButtonPropsColorOverrides {
    blue: true;
  }
}
