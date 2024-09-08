import clsx from 'clsx';
import styles from './MenuList.module.scss';
import { Link } from 'react-router-dom';

interface Props {
  handleClick: () => void;
  isOpen: boolean;
}

const MenuList = ({ isOpen, handleClick }: Props) => {
  return (
    <div className={clsx(styles.root, { [styles.open]: isOpen })} onClick={handleClick}>
      <Link to="/menu">Menu</Link>
      <Link to="/">Home</Link>
      <Link to="/testimonials">Testimonials</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/booking">Book</Link>
    </div>
  );
};

export default MenuList;
