import styles from "./education.module.css";

export default function Education({ education }) {
  return (
    <div className={styles.education}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h2 className={styles.heading}>Education</h2>
        <div className={styles.table}>
          {education?.map(({ school, duration, grades, course }) => (
            <>
              <div>
                <div>{school}</div>
                <div className={styles.course}>{course}</div>
              </div>
              <div className={styles.duration}>{duration}</div>
              <div className={styles.grade}>{grades}</div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
