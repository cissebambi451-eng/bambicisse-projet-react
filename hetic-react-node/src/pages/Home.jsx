// On importe NavLink pour créer un lien vers une autre page
import { NavLink } from "react-router"
import "./Home.css";

// Composant Home = page d'accueil
function Home() {
  return (
    // Section principale de la page d'accueil
    <section className="home">
      
      {/* Bloc principal du haut = hero */}
      <div className="home-hero">
        {/* Titre principal */}
        <h1>Bienvenue sur MovieApp 🎬</h1>

        {/* Petit texte de présentation */}
        <p>
          Découvrez les meilleurs films et créez votre liste de favoris
          facilement.
        </p>

        {/* Bouton qui envoie vers la page films */}
        <NavLink to="/movies" className="home-btn">
          Voir les films
        </NavLink>
      </div>

      {/* Deuxième partie = cartes d'informations */}
      <div className="home-features">
        
        {/* Carte 1 */}
        <div className="feature-card">
          <h2>🎥 Explorer</h2>
          <p>Parcourez une sélection de films en quelques clics.</p>
        </div>

        {/* Carte 2 */}
        <div className="feature-card">
          <h2>💚 Favoris</h2>
          <p>Ajoutez vos films préférés dans votre liste personnelle.</p>
        </div>

        {/* Carte 3 */}
        <div className="feature-card">
          <h2>✨ Découvrir</h2>
          <p>Trouvez de nouvelles idées de films à regarder.</p>
        </div>
      </div>
    </section>
  );
}

// On exporte le composant pour pouvoir l'utiliser dans App.jsx
export default Home;