import React from "react";
import { useEffect , useState } from "react";
// API KEY = 6c6a370d 
import './App.css';
import searchIcon from './search.svg';
import MovieCard from "./MovieCard";
const API_URL = 'http://www.omdbapi.com?apikey=6c6a370d';
const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchterm, setSearchterm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
      return () => {
        searchMovies();
      }
    }, [])
    
    

    return(
        <div className="app">
            <h1>MoviesLand</h1>
            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={searchterm}
                    onChange={(e) => setSearchterm(e.target.value)}
                />
                <img
                    src={searchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchterm)}
                />
            </div>

            {
                movies?.length > 0 ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie1={movie} />
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No Movies Found !!</h2>
                    </div>
                )
            }

            
        </div>
    );
}

export default App;