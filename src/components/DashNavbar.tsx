import styles from '../styles/components/DashNavbar.module.css'

export function DashNavbar() {
  return (
    <nav className={styles.navbarContainer}>

      {/* nav-logo */}
      <div className={styles.navbarLogo}>
        <a href="/">
          <img src="/logo.svg" alt="Logo"/>
        </a>
      </div>

      {/* nav-buttons */}
      <ul className={styles.navbarLinks}>
        <li>
          <a href="/">HOME</a>
        </li>
        <li>
          <a href="/consumption">CONSUMO</a>
        </li>
        <li>
          <a href="/fuel">COMBUSTÍVEL</a>
        </li>
        <li>
          <a href="/course">PERCURSO</a>
        </li>
      </ul>

      {/* burguer */}
      <div>
        <div className={styles.line1}></div>
        <div className={styles.line2}></div>
        <div className={styles.line3}></div>
      </div>
    </nav>
  );
}