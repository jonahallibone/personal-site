import { Space_Grotesk } from "next/font/google";
import { extendTheme } from "@chakra-ui/react";
import colors from "./colors";
import global from "./global";

const spaceGroteskFont = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const theme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: false,
  colors,
  fonts: {
    heading: spaceGroteskFont.style.fontFamily,
    body: spaceGroteskFont.style.fontFamily,
  },
  styles: {
    global,
  },
});

export default theme;
