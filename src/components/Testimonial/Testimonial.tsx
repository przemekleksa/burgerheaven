import { FaStar } from 'react-icons/fa';
import styles from './Testimonial.module.scss';

interface Props {
  review: { id: number; name: string; rating: number; comment: string };
}

export const Testimonial = ({ review }: Props) => {
  const { name, comment, rating } = review;
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div className={styles.rating}>
          <svg width="0" height="0">
            <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop stopColor="#eceade" offset="0%" />
              <stop stopColor="#f4c86a" offset="100%" />
            </linearGradient>
          </svg>

          {Array.from({ length: rating }).map((_, index) => (
            <FaStar key={index} style={{ fill: 'url(#blue-gradient)' }} />
          ))}
        </div>
        <h3 className={styles.name}>{name}</h3>
      </div>

      <div className={styles.comment}>{comment}</div>
    </div>
  );
};
