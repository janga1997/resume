import styles from "./skills.module.css";

export default function Skills({ skills }) {
  return (
    <div className={styles.skills}>
      {skills.map(({ name, list }) => (
        <div className={styles.skill}>
          <h2>{name}</h2>
          {list.map((item) => (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "0.25rem",
              }}
            >
              <span style={{ fontSize: "0.5rem", paddingRight: "0.5rem" }}>
                |>
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
