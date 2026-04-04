function Favorites({ favorites, removeFromFavorites }) {
  return (
    <section className="movies-page">
      <h1>Mes favoris 💚</h1>

      {favorites.length === 0 ? (
        <p>Vos films favoris apparaîtront ici.</p>
      ) : (
        <div className="movies-list">
          {favorites.map((movie) => (
            <div className="movie-card" key={movie.id}>
              <img src={movie.image} alt={movie.title} />
              <h2>{movie.title}</h2>
              <p>{movie.year}</p>
              <p>{movie.category}</p>
              <button onClick={() => removeFromFavorites(movie.id)}>
                Retirer des favoris
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Favorites;