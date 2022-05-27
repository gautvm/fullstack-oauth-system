import type { AppProps } from "next/app";
import { UserContextComponent } from "../contexts/UserContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserContextComponent>
      <Component {...pageProps} />;
    </UserContextComponent>
  );
}

export default MyApp;
