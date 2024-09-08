import Book from '../Book/Book';
import Contact from '../Contact/Contact';
import Hero from '../Hero/Hero';
import Menu from '../Menu/Menu';
import Testimonials from '../Testimonials/Testimonials';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.root}>
      <Hero />
      <Menu />
      <Testimonials />
      <Book />
      <Contact />
    </div>
  );
};

export default Home;
