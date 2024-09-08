import { Route, Routes } from 'react-router-dom';
import './App.css';
import styles from './App.module.scss';
import NavBar from './components/NavBar/NavBar';
import Menu from './screens/Menu/Menu';
import Testimonials from './screens/Testimonials/Testimonials';
import Contact from './screens/Contact/Contact';
import Book from './screens/Book/Book';
import Home from './screens/Home/Home';

function App() {
  return (
    <div className={styles.root}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Book />} />
      </Routes>
    </div>
  );
}

export default App;
