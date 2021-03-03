import styles from '../styles/components/HomeLogo.module.css'

export function HomeLogo() {
  return (
    <div className={styles.homeLogoContainer}>
      <img src="/logo-full.svg" alt="HomeLogo"/>
    </div>
  );
}