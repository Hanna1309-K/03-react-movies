import React from "react";
import styles from "./SearchBar.module.css"; // <-- імпорт CSS-модуля

interface SearchBarProps {
    onSubmit: (query: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const query = (form.elements.namedItem("query") as HTMLInputElement).value;

        if (!query.trim()) {
            alert("Please enter your search query."); // можна замінити на toast
            return;
        }

        onSubmit(query);
        form.reset();
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        className={styles.input}
                        name="query"
                        type="text"
                        placeholder="Search movies..."
                    />
                    <button className={styles.button} type="submit">
                        Search
                    </button>
                </form>
            </div>
        </header>
    );
}