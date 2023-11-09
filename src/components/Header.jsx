import styles from "../styles/Header.module.css";

function Header() {
  return (
    <>
        <header className={styles.header}>
            <h1 className={styles.name}>Contact App</h1>
            <p className={styles.info}>
                <span>Falaki</span> | React.js New Project
            </p>
        </header>
    </>
  )
}

export default Header;