import styles from './Hero.module.scss';
import foto from '../../assets/images/burger2.jpg';

const Hero = () => {
  return (
    <div className={styles.root}>
      <img src={foto} alt="burger" />
    </div>
  );
};

export default Hero;
