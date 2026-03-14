import type { Movie } from "../../types/movie";
import styles from "./MovieGrid.module.css"; // <-- імпорт CSS-модуля

interface MovieGridProps {
    movies: Movie[];
    onSelect: (movie: Movie) => void;
}

export default function MovieGrid({ movies, onSelect }: MovieGridProps) {
    if (!movies.length) return null; // не рендерити порожній список

    return (
        <ul className={styles.grid}>
            {movies.map((movie) => (
                <li key={movie.id} className={styles.item} onClick={() => onSelect(movie)}>
                    <div className={styles.card}>
                        <img
                            className={styles.image}
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            loading="lazy"
                        />
                        <h2 className={styles.title}>{movie.title}</h2>
                    </div>
                </li>
            ))}
        </ul>
    );
}