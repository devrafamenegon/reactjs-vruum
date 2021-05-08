import Link from 'next/link';
import { CardCover, CardBody, CardContainer } from '../styles/components/HomeCard';

interface HomeCardProps {
  img: string;
  title: string;
  description: string;
  route: string;
  color: string;
}

export function HomeCard(props: HomeCardProps) {

  return (
    <CardContainer cardBackground={props.color}>
      <CardCover>
        <img src={`/home/${props.img}.svg`}/>
        <h3>{props.title}</h3>
      </CardCover>

      <CardBody>
        <span>{props.description}</span>
        
        <Link href={`/dashboard/${props.route}`}>
          <button type="button">
            <a>Clique para ver mais →</a>
          </button>
        </Link>
      </CardBody>
    </CardContainer>
  );
}