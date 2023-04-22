// import "../share/styles/Global.css";
import "tailwindcss/base.css";
import { ThemeProvider } from "styled-components";
// import { GlobalStyles, themeFn } from "../share/styles/Themeconfig";
// import { useOutline } from "../share/utils/tools/useTools";

declare module "react" {
  interface Attributes {
    css?: any;
  }
}

function MyApp({ Component, pageProps }) {
  // useOutline();

  // // <ThemeProvider theme={themeFn(1, 1)}>
  //   {/* <GlobalStyles /> */}
  return (
      <>
        <Component {...pageProps} />
      </>
  );
}
// </ThemeProvider>

export default MyApp;
