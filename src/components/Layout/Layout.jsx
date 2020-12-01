import { useEffect, useState } from "react";
import { MdBrightness6 } from "react-icons/md";
import { IconContext } from "react-icons";
import Head from "next/head";
import Link from "next/link";
import Logo from './Logo';
import styles from "./Layout.module.css";

const Layout = ({ children, title = "World Ranks" }) => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      localStorage.getItem("theme")
    );

    setTheme(localStorage.getItem("theme") || "light");
  }, []);

  const switchTheme = () => {
    if (theme === "light") {
      saveTheme("dark");
    } else {
      saveTheme("light");
    }
  };

  const saveTheme = (theme) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  };
  return (
    <IconContext.Provider value={{ style: { fontSize: "1.5em" } }}>
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="Description" content="World Ranking and Stats application"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <Link href="/">
          <Logo/>
        </Link>

        <div className={styles.themeSwitcher} onClick={switchTheme}>
          <MdBrightness6 />
        </div>
      </header>
      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>TKS Next Experiments</footer>
    </div>
    </IconContext.Provider>
  );
};

export default Layout;
