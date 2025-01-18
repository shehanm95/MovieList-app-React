import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useMoveContext } from '../context/MovieContext';
import { MovieCard } from '../component/movieCard/MovieCard';

export const Favorites = () => {
    const { favos } = useMoveContext()

    return (
        <>
            {favos.length == 0 && <Box
                className="no-favorites"
                sx={{
                    textAlign: 'center',
                    padding: 4,
                    margin: 'auto',
                    maxWidth: '600px',
                    mt: 8,
                    border: '1px dashed gray',
                    borderRadius: 2,
                    boxShadow: 3,
                    bgcolor: '#f9f9f9',
                }}
            >
                <Typography variant="h4" color="text.primary" gutterBottom>
                    You Do Not Have Any Favorites For Now
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                    Start adding your favorite movies here, and they will appear in this section.
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/"
                    sx={{ mt: 2 }}
                >
                    Explore Movies
                </Button>
            </Box>}

            {/* Movie List */}
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 2,
                    justifyContent: 'center',
                }}
            >
                {favos.map((movie) => (
                    <Box key={movie.id} sx={{ flex: '1 1 calc(25% - 16px)', minWidth: '250px', maxWidth: '300px' }}>
                        <MovieCard movie={movie} key={movie.id} />
                    </Box>
                ))}
            </Box>


        </>
    );
};
