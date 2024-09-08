import { useEffect, useState } from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

import styles from './NavBar.module.scss';
import MenuList from './MenuList';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClick = () => {
    setIsOpen(prevVal => !prevVal);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <div className={styles.root}>
      <BurgerMenu handleClick={handleClick} isOpen={isOpen} />
      <div className={styles.menuList}>
        <MenuList handleClick={closeMenu} isOpen={isOpen} />
      </div>
    </div>
  );
};

export default NavBar;
