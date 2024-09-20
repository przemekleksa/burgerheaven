import styles from './Modal.module.scss';

interface Props {
  children: React.ReactNode;
  handleClick: () => void;
}

const Modal = ({ children, handleClick }: Props) => {
  return (
    <div className={styles.root}>
      <div className={styles.close} onClick={handleClick} />
      <div className={styles.child}>{children}</div>
    </div>
  );
};

export default Modal;
