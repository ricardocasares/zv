import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { dark } from "@/css/themes";
import { globalStyles } from "@/css/global";

export const App = ({ Component, pageProps }: AppProps) => {
  globalStyles();

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        dark: dark.className,
        light: "light",
      }}
    >
      <Head>
        <title>zv</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
