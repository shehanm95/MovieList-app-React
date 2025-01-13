import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import { useMoveContext } from '../../context/MovieContext';
import { useState } from "react";

export const MovieCard = ({ movie }) => {
    const { favos, addFavorites, removeFavo, isFavorite } = useMoveContext()
    const [favoButtonText, setFavoButtonText] = useState("Add To Favorites");
    const handleFavo = () => {
        console.log("called")
        addFavorites(movie);
        if (isFavorite(movie)) setFavoButtonText("Remove Favorite")
        else setFavoButtonText("Add To Favorites");
    }
    const {
        original_title,
        poster_path,
        release_date,
        title,
    } = movie;

    return (
        <Card sx={{ maxWidth: 345, margin: 2 }}>
            {/* Movie Image */}
            <CardMedia
                component="img"
                image={`https://image.tmdb.org/t/p/w500${poster_path}`} // Replace with actual image URL
                alt={title}
            />

            {/* Movie Details */}
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Release Date: {release_date}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Vote Count : {original_title}
                </Typography>
            </CardContent>

            {/* Action Buttons */}
            <CardActions>
                <Button size="small" color="primary">
                    Learn More
                </Button>
                <Button onClick={() => { handleFavo() }} size="small" color="secondary">
                    {favoButtonText}

                </Button>
            </CardActions>
        </Card>
    );
};
