import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import { useMoveContext } from '../../context/MovieContext';
import { useState } from "react";

export const MovieCard = ({ movie }) => {
    const { addFavorites, removeFavo, isFavorite } = useMoveContext();

    const handleFavo = () => {
        if (isFavorite(movie)) {
            removeFavo(movie);
        } else {
            addFavorites(movie);
        }
    };

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
                image={`https://image.tmdb.org/t/p/w500${poster_path}`}
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
                    Original Name: {original_title}
                </Typography>
            </CardContent>

            {/* Action Buttons */}
            <CardActions>
                <Button size="small" color="primary">
                    Learn More
                </Button>
                <Button onClick={handleFavo} size="small" color="secondary">
                    {isFavorite(movie) ? "Remove Favorite" : "Add To Favorites"}
                </Button>
            </CardActions>
        </Card>
    );
};
