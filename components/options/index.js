import { useState, useEffect } from "react";
import styles from "./options.module.css";


const useTheme = (themesList)=> {
  const [theme, setTheme] = useState(0);
  const themeName = themesList[theme];

  const onClick = () => {
    setTheme((theme + 1) % themesList.length);
  };

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      themeName.toLowerCase()
    );
  }, [theme]);

  return [themeName, onClick];
}

export default function Options() {
  const themesList = ["Light", "Dark", "Plain"];
  const [themeName, changeTheme] = useTheme(themesList);

  return (
    <nav className={styles.options}>
      <button className={styles.themeButton} onClick={changeTheme}>
        {themeName + " Theme"}
      </button>
    </nav>
  );
}
