import styles from '../styles/components/HomeCard.module.css'

interface HomeCardProps {
  img: string;
  title: string;
  description: string;
  route: string;
  color: string;
}

export function HomeCard(props: HomeCardProps) {
  
  function getRoute(route) {
    const changedRoute = route;
    return changedRoute
  }

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardCover}>
        <img src={`/home/${props.img}.svg`} />
        <h3>{props.title}</h3>
      </div>

      <div className={styles.cardBody}>
        <span>{props.description}</span>
        <button 
        type="button"
        onClick={getRoute(props.route)}>
          <a href={`/functions`}>Clique para ver mais →</a>
        </button>
      </div>
    </div>
  );
}
