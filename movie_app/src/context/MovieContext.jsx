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
        if (favos.some(mo => mo.id == movie.id)) return;
        console.log("added")
        setFavos(prev => [...prev, movie])
        console.log(favos)
    }
    const removeFavo = (movieToRemove) => {
        setFavos(prev => prev.filter(movie => movie.id != movieToRemove.id))
        console.log("removed")
        console.log(favos)
    }
    const isFavorite = (movie) => {
        return favos.some(m => m.id == movie.id)
    }
    const value = { favos, addFavorites, removeFavo, isFavorite }

    return <movieContext.Provider value={value}>
        {children}
    </movieContext.Provider>
}