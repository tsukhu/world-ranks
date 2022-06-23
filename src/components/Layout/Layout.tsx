import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import { MdBrightness6, MdTimeline } from 'react-icons/md';
import { IconContext } from 'react-icons';
import Head from 'next/head';
import Link from 'next/link';
import Logo from './Logo';
import styles from './Layout.module.css';

const Layout = ({ children, title = 'World Ranks' }: any) => {
  const router = useRouter();
  const { locale } = router;
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      localStorage.getItem('theme') ?? 'light'
    );

    setTheme(localStorage.getItem('theme') || 'light');
  }, []);

  const switchTheme = () => {
    if (theme === 'light') {
      saveTheme('dark');
    } else {
      saveTheme('light');
    }
  };

  const changeLanguage = useCallback((locale: string) => {
    router.replace(router.asPath, router.asPath, { locale });
  }, []);

  const saveTheme = (theme: string) => {
    setTheme(theme);
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta
          name="Description"
          content="World Ranking and Stats application"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <Link href="/" locale={locale} aria-label="Home">
          <div className={styles.logo}>
            <Logo />
          </div>
        </Link>
        <div className={styles.menuWrapper}>
          <span
            className={`${styles.locale} ${
              locale === 'en-US' ? styles.active : ''
            }`}
            onClick={() => changeLanguage('en-US')}
          >
            en
          </span>
          <span className={styles.locale}>|</span>
          <span
            className={`${styles.locale} ${
              locale === 'fr' ? styles.active : ''
            }`}
            onClick={() => changeLanguage('fr')}
          >
            fr
          </span>
          <Link href="/weather" locale={locale}>
            <a className={styles.themeSwitcher} aria-label="Weather">
              <MdTimeline />
            </a>
          </Link>
          <div
            className={styles.themeSwitcher}
            onClick={switchTheme}
            aria-label="Toggle Theme"
          >
            <MdBrightness6 />
          </div>
        </div>
      </header>
      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>TKS Next Experiments</footer>
    </div>
  );
};

export default Layout;
