import { MovieCard } from '../component/movieCard/MovieCard';
import { Box, TextField, Button, dividerClasses } from '@mui/material';
import { getPopularMovies, getSearchMovies } from '../services/api';
import React, { useState, useEffect } from 'react';

export const Home = () => {
    const [movieList, setMovieList] = useState([]);
    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const functionToCall = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovieList(popularMovies);
            } catch (e) {
                console.log(e);
                setErrors(e);
            } finally {
                setLoading(false);
            }
        };

        functionToCall();
    }, []);

    const [searchText, setSearchText] = useState("");

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        if (loading) return;
        if (!searchText.trim()) return;
        setLoading(true);
        try {
            console.log('search text was : ', searchText)
            const movieResults = await getSearchMovies(searchText);
            setMovieList(movieResults);
            setErrors(null)
        } catch (e) {
            setErrors("Failed to load movies");
        } finally {
            setLoading(false);
        }

    };

    return (
        <Box sx={{ p: 4 }}>
            {/* Search Bar */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                <form onSubmit={handleOnSubmit} style={{ display: 'flex', gap: '8px', width: '100%', maxWidth: '600px' }}>
                    <TextField
                        label="Search Movies"
                        variant="outlined"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        fullWidth
                        sx={{
                            flexGrow: 1,
                            minWidth: '300px',
                            maxWidth: '600px',
                        }}
                    />
                    <Button type="submit" variant="contained" color="primary" sx={{ whiteSpace: 'nowrap' }}>
                        Search
                    </Button>
                </form>
            </Box>
            {/* If Errors */}
            {errors && <Box>{errors}</Box>}

            {/* Movie List */}
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 2,
                    justifyContent: 'center', // Changed from 'flex-start' to 'center'
                }}
            >
                {loading ? <div className='loading'>Loading....</div> :
                    movieList.map((movie) => (
                        <Box key={movie.id} sx={{ flex: '1 1 calc(25% - 16px)', minWidth: '250px', maxWidth: '300px' }}>
                            <MovieCard movie={movie} key={movie.id} />
                        </Box>
                    ))}
            </Box>
        </Box>
    );
};
