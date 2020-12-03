import "../styles/globals.css";
import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
import CountryContextProvider from "../components/CountryContext/CountryContextProvider";

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <CountryContextProvider countries={pageProps.countries}>
      <Component {...pageProps} />
    </CountryContextProvider>
  );
}

export function reportWebVitals({ id, name, label, value, startTime }) {
  const body = JSON.stringify({
    id,
    name,
    label,
    value,
    startTime,
    url: `${Router.asPath}`,
  });
  const url = "/api/createWebVital";

  fetch(url, {
    body: body,
    method: "POST",
    keepalive: true,
    headers: {
      "Content-type": "application/json",
    },
  });
}

export default MyApp;
