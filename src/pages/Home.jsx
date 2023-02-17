import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

import './MovieGrid.css';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
    const [topmovies, setTopMovies] = useState([]);
    //18e97ef3c2bde7e006ac4001ff2ba9df
    const getTopRatedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setTopMovies(data.results);
    }

    useEffect(() => {
        const topRatedUrl = `${moviesURL}top_rated?${apiKey}&language=pt-BR`;

        getTopRatedMovies(topRatedUrl);
    }, []);

    return (
        <div className="container">
            <h2 className="title">Melhores Filmes:</h2>
            <div className="movies-container">
                {topmovies === 0 && <p>Carregando</p>}
                {topmovies.length > 0 && topmovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    );
}

export default Home;