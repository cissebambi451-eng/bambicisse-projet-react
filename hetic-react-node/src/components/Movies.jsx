import styles from "./Movies.module.css";

function Movies({ name, date, country, parole,  }) {
  return (
    <div className={styles.card}>
      
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{country}</p>
      <p>{parole}</p>
    </div>
  );
}

export default Movies;