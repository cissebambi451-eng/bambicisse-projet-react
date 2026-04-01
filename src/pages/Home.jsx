import UserProfile from "../components/UserProfile";
import Movies from "../components/Movies";
import { useState } from "react";

function Home () {

    const [counter, setCounter] = useState(0);
  const [showUsers, setShowUsers] = useState(true);

  const users = [
    { name: "bambi", lastname: "cisse", country: "Mali/Congo" },
    { name: "aminata", lastname: "konate", country: "France" },
    { name: "mahamne", lastname: "maiga", country: "brazil" },
  ];

  const movies = [
    {
      name: "Flash",
      date: "Année de sorties: 2026",
      country: "Bali",
      parole: "Vous voulez voir l'homme le plus rapide courir c'est ici!!!!!",
    },
    {
      name: "Danger's force",
      date: "Année de sorties: 2000",
      country: "New-york",
      parole: "d'élève à super héros à suivre...",
    },
    {
      name: "The night agent",
      date: "Année de sorties: 1990",
      country: "Chine",
      parole: "Le matin c'est un homme normale la nuit c 'est un agent du FBI..",
    },
  ];
    return(
        <div>
            <h1>welcome to our site</h1>
            <p>This is the home page .</p>


             <div className="test">
      <h1>Test section</h1>

      <button onClick={() => setCounter(counter + 1)}>Add</button>   
      <h2>count: {counter}</h2>
      <button onClick={() => setCounter(counter - 1)}>Subtract</button>

      <button onClick={() => setShowUsers(!showUsers)}>
        {showUsers ? "Hide Users" : "Show Users"}
      </button>

      <h1>Coucou</h1>

      <div className="users-list">  
        {showUsers &&
          users.map((user, id) => (  // map est une boucle qui recupere plusieurs elements 
            <UserProfile   // une fonction doit commencer par une majuscule et le reste variable etc une minuscule
              key={id}
              name={user.name}
              lastname={user.lastname}
              country={user.country}
            />
          ))}
      </div>

      <h1>Movies lists</h1>

      <div className="movies-list">
        {movies.map((movie, id) => (
          <Movies
            key={id}
            name={movie.name}
            date={movie.date}
            country={movie.country}
            parole={movie.parole}
          />
        ))}
      </div>
    </div>
        </div>

    )
}
export default Home ;