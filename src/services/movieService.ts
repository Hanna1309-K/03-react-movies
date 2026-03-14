import axios from "axios";
import type { Movie } from "../types/movie";

interface MoviesResponse {
    results: Movie[];
}

const API_URL = "https://api.themoviedb.org/3/search/movie";

export const fetchMovies = async (query: string, page = 1): Promise<Movie[]> => {
    const token = import.meta.env.VITE_TMDB_TOKEN;
    if (!token) throw new Error("TMDB token is missing! Check your .env or Vercel Environment Variables.");

    const response = await axios.get<MoviesResponse>(API_URL, {
        params: { query, page },
        headers: { Authorization: `Bearer ${token}` },
    });

    return response.data.results;
};