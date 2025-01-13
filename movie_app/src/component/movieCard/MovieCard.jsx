import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

export const MovieCard = ({ movie }) => {
    const {
        adult,
        backdrop_path,
        genre_ids,
        id,
        original_language,
        original_title,
        overview,
        popularity,
        poster_path,
        release_date,
        title,
        video,
        vote_average,
        vote_count
    } = movie;

    return (
        <Card sx={{ maxWidth: 345, margin: 2 }}>
            {/* Movie Image */}
            <CardMedia
                component="img"
                height="140"
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
                    This is a movie description or tagline.
                </Typography>
            </CardContent>

            {/* Action Buttons */}
            <CardActions>
                <Button size="small" color="primary">
                    Learn More
                </Button>
                <Button size="small" color="secondary">
                    Add to Favorites
                </Button>
            </CardActions>
        </Card>
    );
};
