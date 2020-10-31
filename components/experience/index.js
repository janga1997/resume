import styles from "./experience.module.css";

export default function Experience({ experience }) {
  return (
    <div className={styles.experience}>
      <h2>Experience</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {experience.map(({ name, range, role, location, content, list }) => (
          <div key={name}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span className={styles.company}>{name}</span>
              <span className={styles.range}>{range}</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "0.7rem",
              }}
            >
              <span className={styles.role}>{role}</span>
              <span className={styles.location}>{location}</span>
            </div>
            <div
              className={styles.content}
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
            <div className={styles.list}>
              {list.map((item) => (
                <div>
                  <span>|> </span>
                  <span dangerouslySetInnerHTML={{ __html: item }}></span>
                </div>
              ))}
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}
