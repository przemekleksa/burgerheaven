import styles from './ItemCard.module.scss';

interface Props {
  item: {
    id: number;
    name: string;
    description: string;
    price: number;
  };
}

const ItemCard = ({ item }: Props) => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <h2>{item.name}</h2>
        <div className={styles.price}>
          <div className={styles.triangleLeft} />
          <div className={styles.priceTag}>{item.price}</div>
        </div>
      </div>
      <p className={styles.desc}>{item.description}</p>
    </div>
  );
};

export default ItemCard;
