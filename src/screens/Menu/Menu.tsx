import styles from './Menu.module.scss';
import { useEffect, useState } from 'react';
import { ItemMenu } from '../../types/itemMenu';
import ItemCard from '../../components/ItemCard/ItemCard';
import { useTranslation } from 'react-i18next';

const Menu = () => {
  const [item, setItem] = useState<number>(1);
  const { t, i18n } = useTranslation();
  const [menu, setMenu] = useState<{
    burgers: ItemMenu[];
    fries: ItemMenu[];
    snacks: ItemMenu[];
    salads: ItemMenu[];
    drinks: ItemMenu[];
  }>({
    burgers: [],
    fries: [],
    snacks: [],
    salads: [],
    drinks: [],
  });

  const [itemMenu, setItemMenu] = useState<ItemMenu[]>([]);

  const menuItems = [
    { id: 1, name: t('menu.burgers.name') },
    { id: 2, name: t('menu.fries.name') },
    { id: 3, name: t('menu.snacks.name') },
    { id: 4, name: t('menu.salads.name') },
    { id: 5, name: t('menu.drinks.name') },
  ];

  const changeItem = (itemId: number) => {
    setItem(itemId);
  };

  useEffect(() => {
    const fetchMenu = () => {
      setMenu({
        burgers: t('menu.burgers.menu', { returnObjects: true }) as ItemMenu[],
        fries: t('menu.fries.menu', { returnObjects: true }) as ItemMenu[],
        snacks: t('menu.snacks.menu', { returnObjects: true }) as ItemMenu[],
        salads: t('menu.salads.menu', { returnObjects: true }) as ItemMenu[],
        drinks: t('menu.drinks.menu', { returnObjects: true }) as ItemMenu[],
      });
    };

    fetchMenu();
  }, [t, i18n.language]);

  useEffect(() => {
    switch (item) {
      case 1:
        setItemMenu(menu.burgers);
        break;
      case 2:
        setItemMenu(menu.fries);
        break;
      case 3:
        setItemMenu(menu.snacks);
        break;
      case 4:
        setItemMenu(menu.salads);
        break;
      case 5:
        setItemMenu(menu.drinks);
        break;
      default:
        setItemMenu(menu.burgers);
    }
  }, [item, menu]);

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
