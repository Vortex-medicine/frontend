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
    darkGrey: Palette["primary"];
    orange: Palette["primary"];
    green: Palette["primary"];
  }

  interface PaletteOptions {
    blue: PaletteOptions["primary"];
    darkGrey: PaletteOptions["primary"];
    orange: PaletteOptions["primary"];
    green: PaletteOptions["primary"];
  }
}

declare module "@mui/material/IconButton" {
  interface IconButtonPropsColorOverrides {
    blue: true;
    darkGrey: true;
    orange: true;
  }
}

declare module "@mui/material/Badge" {
  interface BadgePropsColorOverrides {
    orange: true;
  }
}

declare module "@mui/material/CircularProgress" {
  interface CircularProgressPropsColorOverrides {
    green: true;
  }
}
