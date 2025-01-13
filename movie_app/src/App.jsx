import { NavBar } from "./component/navBar/NavBar";
import { MovieProvider } from "./context/MovieContext";
import { Favorites } from "./pages/Favorites";
import { Home } from "./pages/Home";
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <MovieProvider className="mainContent">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </MovieProvider>)
};


export default App
