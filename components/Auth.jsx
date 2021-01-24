import Head from "next/head";

import Input from "@/components/Input";
import Form from "@/components/Form";
import styles from "@/styles/components/Auth.module.scss";

const Auth = () => {
  return (
    <main className={styles.auth}>
      <Head>
        <title>Authentificare | Kaapo Weather App</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.auth__box}>
        <div className={styles.auth__box__header}>
          <div className={styles.auth__box__header__indicator}>
            <div className={styles.auth__box__header__indicator__stepActive}>
              <span />
            </div>
            <div className={styles.auth__box__header__indicator__stepLine} />
            <div className={styles.auth__box__header__indicator__step}>
              <span />
            </div>
            <div className={styles.auth__box__header__indicator__stepLine} />
            <div className={styles.auth__box__header__indicator__step}>
              <span />
            </div>
          </div>
          <div className={styles.auth__box__header__title}>
            <h1>CREATE ACCOUNT</h1>
          </div>
        </div>
        <div className={styles.auth__box__body}>
          <Form />
        </div>
        <div className={styles.auth__box__footer}>
          <a href="/">Terms & Conditions</a>
        </div>
      </div>
    </main>
  );
};

export default Auth;
