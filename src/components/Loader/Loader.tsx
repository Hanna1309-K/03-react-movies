import styles from "./Loader.module.css"; // <-- імпорт CSS-модуля

export default function Loader() {
    return <p className={styles.text}>Loading movies, please wait...</p>;
}