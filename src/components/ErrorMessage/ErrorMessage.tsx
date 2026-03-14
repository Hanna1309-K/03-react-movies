import styles from "./ErrorMessage.module.css"; // <-- імпорт CSS-модуля

export default function ErrorMessage() {
    return (
        <p className={styles.text}>There was an error, please try again...</p>
    );
}