import Link from "next/link";
import Head from "next/head";
import styles from "@/styles/Home.module.scss";

export default function Layout({ children, title = "Kaapo Weather App" }) {
  return (
    <div>
      <Head>
        <title>{title} | Kaapo Weather App</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>{" "}
          |
          <Link href="/about">
            <a>About</a>
          </Link>{" "}
          |
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </nav>
      </header>

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
    </div>
  );
}
