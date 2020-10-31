import styles from "./editor.module.css";
import { useState } from "react";

export default function Editor({ data, handleChange }) {
  return (
    <textarea
      value={data}
      onChange={handleChange}
      className={styles.editor}
    ></textarea>
  );
}
