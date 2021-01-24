import Link from "next/link";
import Head from "next/head";
import styles from "@/styles/components/Layout.module.scss";

export default function Layout({ children, title = "Kaapo Weather App" }) {
  return (
    <>
      <Head>
        <title>{title} | Kaapo Weather App</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <a
          href="https://kaapo.studio"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Kaapo.Studio
        </a>
      </footer>
    </>
  );
}
