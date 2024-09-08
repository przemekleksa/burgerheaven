import burgersMenu from './menuItems.ts/burgersMenu';
import styles from './Menu.module.scss';
import { useEffect, useState } from 'react';
import { ItemMenu } from '../../types/itemMenu';
import ItemCard from '../../components/ItemCard/ItemCard';
import friesMenu from './menuItems.ts/friesMenu';
import snacksMenu from './menuItems.ts/snacksMenu';
import saladsMenu from './menuItems.ts/saladsMenu';
import drinksMenu from './menuItems.ts/drinksMenu';

const Menu = () => {
  const [item, setItem] = useState<number>(1);
  const [itemMenu, setItemMenu] = useState<ItemMenu[]>(burgersMenu);

  const menuItems = [
    { id: 1, name: 'Burgers' },
    { id: 2, name: 'Fries' },
    { id: 3, name: 'Snacks' },
    { id: 4, name: 'Salads' },
    { id: 5, name: 'Drinks' },
  ];

  const changeItem = (itemId: number) => {
    setItem(itemId);
  };

  useEffect(() => {
    const showProperItemMenu = () => {
      switch (item) {
        case 1:
          setItemMenu(burgersMenu);
          break;
        case 2:
          setItemMenu(friesMenu);
          break;
        case 3:
          setItemMenu(snacksMenu);
          break;
        case 4:
          setItemMenu(saladsMenu);
          break;
        case 5:
          setItemMenu(drinksMenu);
          break;
        default:
          setItemMenu(burgersMenu);
      }
    };
    showProperItemMenu();
  }, [item]);

  return (
    <div className={styles.root}>
      <div className={styles.position}>
        {menuItems.map(item => (
          <div key={item.id} onClick={() => changeItem(item.id)} className={styles.menuItem}>
            <span>{item.name}</span>
          </div>
        ))}
      </div>

      {itemMenu.map(item => (
        <ItemCard item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Menu;
