import Slider from 'react-slick';
import { Testimonial } from '../../components/Testimonial/Testimonial';
import styles from './Testimonials.module.scss';
import { useTranslation } from 'react-i18next';
import { Review } from '../../types/review';

const Testimonials = () => {
  const { t } = useTranslation();
  const reviews = t('reviews', { returnObjects: true }) as Review[];

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className={styles.root}>
      <Slider {...settings} className={styles.slider}>
        {reviews.map((review: Review) => (
          <Testimonial review={review} key={review.id} />
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
