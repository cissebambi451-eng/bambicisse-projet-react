import styles from "./Movies.module.css";

function Movies({ name, date, country, parole }) {
  return (
    <div className={styles.card}>
      <h2>{name}</h2>
      <p className={styles.meta}>{date}</p>
      <p className={styles.meta}>{country}</p>
      <p className={styles.desc}>{parole}</p>
    </div>
  );
}

export default Movies;

