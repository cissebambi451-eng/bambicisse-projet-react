// On importe les hooks React
import { useEffect, useState } from "react";
import "./Movies.css";
import image1 from "../assets/black-panther.png"
import image2 from "../assets/lion.png"
import image3 from "../assets/image.png"
import image4 from "../assets/joker.jpg"
import image5 from "../assets/interstellar.jpg"
import image6 from "../assets/titanic.jpg"



function Movies({ addToFavorites, favorites }) {
  // 🔹 État qui va contenir la liste des films
  const [movies, setMovies] = useState([]);

  // 🔹 useEffect = s'exécute quand la page se charge
  useEffect(() => {
    // Tableau de films (tes données)
    const moviesData = [
      {
        id: 1,
        title: "Avatar",
        year: 2009,
        category: "Science-fiction",
        image: image3,
      },
      {
        id: 2,
        title: "Titanic",
        year: 1997,
        category: "Romance",
        image: image6
      },
      {
        id: 3,
        title: "Black Panther",
        year: 2018,
        category: "Action",
        image:image1 ,
      },
      {
        id: 4,
        title: "Interstellar",
        year: 2014,
        category: "Science-fiction",
        image: image5
      },
     {
      id: 5,
      title: "Joker",
      year: 2019,
      category: "Drame",
      image: image4
    },
    {
      id: 6,
      title: "The Lion King",
      year: 2019,
      category: "Aventure",
      image:image2
    },
    ];

    // 🔹 On met les films dans le state
    setMovies(moviesData);
  }, []); // [] = se lance une seule fois

  return (
    <section className="movies-page">
      {/* Titre */}
      <h1>Nos films 🎬</h1>
      <p>Découvrez et ajoutez vos films préférés</p>

      {/* 🔥 Liste des films */}
      <div className="movies-list">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            {/* Image */}
            <img src={movie.image} alt={movie.title} />

            {/* Infos */}
            <h2>{movie.title}</h2>
            <p>{movie.year}</p>
            <p>{movie.category}</p>

            {/* Bouton */}
            {/* Vérifie si le film est déjà dans les favoris */}
{favorites.some((fav) => fav.id === movie.id) ? (
  <button disabled>Déjà en favoris</button>
) : (
  <button onClick={() => addToFavorites(movie)}>
    Ajouter aux favoris
  </button>
)}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Movies;