import Link from 'next/link';
import styles from '../styles/components/DashNavbar.module.css'

interface DashNavbarProps {
  color: string;
}

export function DashNavbar(props: DashNavbarProps) {
  return (
    <div className={styles.navbarContainer} style= {{backgroundColor: props.color}}>
      <div className={styles.navbarContent}>
        {/* nav-logo */}
        <div className={styles.navbarLogo}>
          <a href="/">
            <img src="/logo.svg" alt="Logo"/>
          </a>
        </div>

        {/* nav-buttons */}
        <ul className={styles.navbarLinks}>
          <li>
            <Link href="/">
              <a>HOME</a>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/consumption">
              <a>CONSUMO</a>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/fuel">
              <a>COMBUSTÍVEL</a>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/course">
              <a>PERCURSO</a>
            </Link>
          </li>
        </ul>
        
        {/* burguer */}
        <div className={styles.navbarBurguer}>
          <div className={styles.line1}></div>
          <div className={styles.line2}></div>
          <div className={styles.line3}></div>
        </div>

      </div>
    </div>
  );
}