import clsx from 'clsx';
import styles from './MenuList.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  handleClick: () => void;
  isOpen: boolean;
  changeLanguage: (lng: string) => void;
}

const MenuList = ({ isOpen, handleClick, changeLanguage }: Props) => {
  const { t, i18n } = useTranslation();

  const [language, setLanguage] = useState<string>(i18n.language);

  const changeLang = (lang: string) => {
    setLanguage(lang);
    changeLanguage(lang);
  };

  return (
    <div className={clsx(styles.root, { [styles.open]: isOpen })}>
      <div onClick={handleClick} className={styles.list}>
        <Link to="/menu">{t('navigation.menu')}</Link>
        <Link to="/">{t('navigation.home')}</Link>
        <Link to="/testimonials">{t('navigation.testimonials')}</Link>
        <Link to="/contact">{t('navigation.contact')}</Link>
        <Link to="/booking">{t('navigation.book')}</Link>
      </div>

      <div className={styles.lang}>
        {language !== 'en' && (
          <div onClick={() => changeLang('en')} className={styles.icon}>
            <span className="fi fi-gb"></span>
          </div>
        )}
        {language !== 'pl' && language !== 'pl-PL' && (
          <div onClick={() => changeLang('pl')} className={styles.icon}>
            <span className="fi fi-pl"></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuList;
