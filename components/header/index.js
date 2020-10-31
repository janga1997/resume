import styles from "./header.module.css";

export default function Header({ header }) {
  const { name, subtitle } = header;

  return (
    <div className={styles.header}>
      <h1>{name}</h1>
      <h3 className={styles.subtitle}>{subtitle}</h3>
    </div>
  );
}
