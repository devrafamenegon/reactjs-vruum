import Link from 'next/link';
import styles from '../styles/components/HomeCard.module.css'

interface HomeCardProps {
  img: string;
  title: string;
  description: string;
  route: string;
  color: string;
}

export function HomeCard(props: HomeCardProps) {

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardCover} style={{backgroundColor: props.color}}>
        <img src={`/home/${props.img}.svg`}/>
        <h3>{props.title}</h3>
      </div>

      <div className={styles.cardBody}>
        <span>{props.description}</span>
        
        <Link href={`/dashboard/${props.route}`}>
          <button type="button">
            <a>Clique para ver mais →</a>
          </button>
        </Link>
      </div>
    </div>
  );
}