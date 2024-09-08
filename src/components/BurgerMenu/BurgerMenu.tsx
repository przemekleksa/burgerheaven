import styles from './BurgerMenu.module.scss';
import clsx from 'clsx';

interface Props {
  handleClick: () => void;
  isOpen: boolean;
}

const BurgerMenu = ({ handleClick, isOpen }: Props) => {
  return (
    <div className={styles.hamburgerIcon} id="icon" onClick={handleClick}>
      <div className={clsx(styles.icon1, { [styles.icon1a]: isOpen })} id="a"></div>
      <div className={clsx(styles.icon2, { [styles.icon2c]: isOpen })} id="b"></div>
      <div className={clsx(styles.icon3, { [styles.icon3b]: isOpen })} id="c"></div>
    </div>
  );
};

export default BurgerMenu;
