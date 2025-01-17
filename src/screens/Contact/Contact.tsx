import { FaClock, FaEnvelope, FaFacebook, FaHome, FaInstagram, FaPhone } from 'react-icons/fa';
import styles from './Contact.module.scss';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.line}>
          <FaHome />
          <p>
            <a href="https://www.google.com/maps?q=ul.+Smakoszy+15,+31-001+Krakow" target="_blank">
              ul. Smakoszy 15, 31-001 Kraków
            </a>
          </p>
        </div>
        <div className={styles.line}>
          <FaPhone />
          <p>
            <a href="phone:+48129876543">+48 12 987 6543</a>
          </p>
        </div>
        <div className={styles.line}>
          <FaEnvelope />
          <p>
            <a href="mailto:kontakt@burgerparadise.pl">kontakt@burgerparadise.pl</a>
          </p>
        </div>
        <div className={styles.openingHours}>
          <div className={styles.title}>
            <FaClock />
            {t('contact.openingHours')}
          </div>
          <div className={styles.hours}>
            <div>
              {t('contact.monFri')}: <span>11:00 - 22:00</span>
            </div>
            <div>
              {t('contact.saturday')}: <span>12:00 - 23:00</span>
            </div>
            <div>
              {t('contact.sunday')} <span>12:00 - 21:00</span>
            </div>
          </div>
        </div>
        <div className={styles.socials}>
          <div className={styles.social}>
            <FaFacebook size={32} />
          </div>
          <div className={styles.social}>
            <FaInstagram size={32} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
