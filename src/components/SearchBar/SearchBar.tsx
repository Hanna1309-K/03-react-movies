
import styles from "./SearchBar.module.css"; // <-- імпорт CSS-модуля
import toast from "react-hot-toast";

interface SearchBarProps {
    onSubmit: (query: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {

    const handleAction = (formData: FormData) => {
        const query = formData.get("query") as string;

        if (!query || !query.trim()) {
            toast.error("Please enter your search query.");
            return;
        }

        onSubmit(query.trim());
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <form className={styles.form} action={handleAction}>
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