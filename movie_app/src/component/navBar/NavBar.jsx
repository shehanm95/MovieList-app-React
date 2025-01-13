import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

export const NavBar = () => {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                {/* Logo or Home Link */}
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                        Home
                    </Link>
                </Typography>

                {/* Navigation Links */}
                <Box>
                    <Button color="inherit">
                        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                            Home
                        </Link>
                    </Button>
                    <Button color="inherit">
                        <Link to="/favorites" style={{ textDecoration: "none", color: "inherit" }}>
                            Favorites
                        </Link>
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};
