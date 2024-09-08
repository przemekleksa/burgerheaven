import { Testimonial } from '../../components/Testimonial/Testimonial';
import reviews from './reviews';
import styles from './Testimonials.module.scss';

const Testimonials = () => {
  return (
    <div className={styles.root}>
      {reviews.map(review => (
        <Testimonial review={review} key={review.id} />
      ))}
    </div>
  );
};

export default Testimonials;
