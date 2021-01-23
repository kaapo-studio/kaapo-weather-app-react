import styles from "@/styles/components/Button.module.scss";

const Button = ({ name }) => {
  return <button className={styles.btn}>{name}</button>;
};

export default Button;
