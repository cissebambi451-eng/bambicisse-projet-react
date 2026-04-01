import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </>
  );
}

export default App;