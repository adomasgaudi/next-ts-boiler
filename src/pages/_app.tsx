import "../app/infra/styles/Private.css";
import "../share/styles/Global.css";
import "tailwindcss/base.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, themeFn } from "../share/styles/Themeconfig";
import { useOutline } from "../share/utils/tools/useTools";

declare module "react" {
  interface Attributes {
    css?: any;
  }
}

function MyApp({ Component, pageProps }) {
  useOutline();

  return (
    <ThemeProvider theme={themeFn(1, 1)}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
