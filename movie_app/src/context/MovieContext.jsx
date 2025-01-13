import { Children, createContext, useContext, useEffect, useState } from "react";


const movieContext = createContext();

export const useMoveContext = () => useContext(movieContext);

export const MovieProvider = ({ children }) => {
    const [favos, setFavos] = useState([])

    useEffect(() => {
        const storedFavos = localStorage.getItem("storedFavos");
        if (storedFavos) setFavos(JSON.parse(storedFavos));
    }, []);

    useEffect(() => {
        localStorage.setItem("storedFavos", JSON.stringify(favos));
    }, [favos]);

    const addFavorites = (movie) => {
        console.log(movie)
        setFavos(prev => [...prev, movie])
    }
    const removeFavo = (movie) => {
        setFavos(prev => prev.filter(movie => movie.id != movie.id))
    }
    const isFavorite = (movie) => {
        favos.some(m => m.id == movie.id)
    }
    const value = { favos, addFavorites, removeFavo, isFavorite }

    return <movieContext.Provider value={value}>
        {children}
    </movieContext.Provider>
}