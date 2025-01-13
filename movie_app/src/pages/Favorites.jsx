import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const Favorites = () => {
    return (
        <Box
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
        </Box>
    );
};
