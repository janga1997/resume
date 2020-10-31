import styles from "./contact.module.css";

export default function Contact({ contact }) {
  const { email, phone, github } = contact;

  return (
    <div className={styles.contact}>
      <h3>{email}</h3>
      <h3>{phone}</h3>
      <h3>{github}</h3>
    </div>
  );
}
