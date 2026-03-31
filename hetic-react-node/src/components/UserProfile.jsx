import styles from "./UserProfile.module.css"; 
function UserProfile({ name, lastname, birthdays, country, parole }) {
  return (
    <div className={styles.card}>
      <h1>{name} {lastname}</h1>
      <h2>{birthdays}</h2>
      <h3>{country}</h3>
      <p>{parole}</p>
    </div>
  );
}
export default UserProfile;