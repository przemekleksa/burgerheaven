import { useEffect, useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import styles from './Book.module.scss';
import clsx from 'clsx';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Modal from '../../components/Modal/Modal';
import { useTranslation } from 'react-i18next';
import { enGB as en, pl } from 'date-fns/locale';
import { Locale } from 'react-datepicker/dist/date_utils';

const initValues = {
  phone: '',
  name: '',
  numberOfSeats: '',
  notes: '',
  bookingTime: '',
  bookingDate: new Date(),
};

const validationSchema = Yup.object({
  phone: Yup.string().required('Required').max(15),
  numberOfSeats: Yup.number().required('Required').max(10),
  name: Yup.string().required('Required'),
  notes: Yup.string(),
  bookingTime: Yup.string().required('Required'),
  bookingDate: Yup.date().required('Required'),
});

const options = [
  { value: '', label: 'Select a time', dayOfTheWeek: [1, 2, 3, 4, 5, 6, 7] },
  { value: '11:00', label: '11:00', dayOfTheWeek: [1, 2, 3, 4, 5] },
  { value: '11:30', label: '11:30', dayOfTheWeek: [1, 2, 3, 4, 5] },
  { value: '12:00', label: '12:00', dayOfTheWeek: [1, 2, 3, 4, 5, 6, 7] },
  { value: '12:30', label: '12:30', dayOfTheWeek: [1, 2, 3, 4, 5, 6, 7] },
  { value: '13:00', label: '13:00', dayOfTheWeek: [1, 2, 3, 4, 5, 6, 7] },
  { value: '13:30', label: '13:30', dayOfTheWeek: [1, 2, 3, 4, 5, 6, 7] },
  { value: '14:00', label: '14:00', dayOfTheWeek: [1, 2, 3, 4, 5, 6, 7] },
  { value: '14:30', label: '14:30', dayOfTheWeek: [1, 2, 3, 4, 5, 6, 7] },
  { value: '15:00', label: '15:00', dayOfTheWeek: [1, 2, 3, 4, 5, 6, 7] },
  { value: '15:30', label: '15:30', dayOfTheWeek: [1, 2, 3, 4, 5, 6, 7] },
  { value: '16:00', label: '16:00', dayOfTheWeek: [1, 2, 3, 4, 5, 6, 7] },
  { value: '16:30', label: '16:30', dayOfTheWeek: [1, 2, 3, 4, 5, 6, 7] },
  { value: '17:00', label: '17:00', dayOfTheWeek: [1, 2, 3, 4, 5, 6, 7] },
  { value: '17:30', label: '17:30', dayOfTheWeek: [1, 2, 3, 4, 5, 6, 7] },
  { value: '18:00', label: '18:00', dayOfTheWeek: [1, 2, 3, 4, 5, 6, 7] },
  { value: '18:30', label: '18:30', dayOfTheWeek: [1, 2, 3, 4, 5, 6, 7] },
  { value: '19:00', label: '19:00', dayOfTheWeek: [1, 2, 3, 4, 5, 6, 7] },
  { value: '19:30', label: '19:30', dayOfTheWeek: [1, 2, 3, 4, 5, 6, 7] },
  { value: '20:00', label: '20:00', dayOfTheWeek: [1, 2, 3, 4, 5, 6, 7] },
  { value: '20:30', label: '20:30', dayOfTheWeek: [1, 2, 3, 4, 5, 6, 7] },
  { value: '21:00', label: '21:00', dayOfTheWeek: [1, 2, 3, 4, 5, 7] },
  { value: '21:30', label: '21:30', dayOfTheWeek: [1, 2, 3, 4, 5] },
  { value: '22:00', label: '22:00', dayOfTheWeek: [1, 2, 3, 4, 5] },
  { value: '22:30', label: '22:30', dayOfTheWeek: [6] },
  { value: '23:00', label: '23:00', dayOfTheWeek: [6] },
];

const numberOfPeople = Array.from({ length: 21 })
  .map((_, i) => ({ value: i, label: i }))
  .slice(1);

interface Booking {
  phone: string;
  name: string;
  numberOfSeats: string;
  notes: string;
  bookingTime: string;
  bookingDate: Date;
}

const Book = () => {
  const [dayOfTheWeek, setDayOfTheWeek] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(true);
  const [booking, setBooking] = useState<Booking>();
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState<Locale>(
    i18n.language === 'pl' || i18n.language === 'pl-PL' ? pl : pl
  );

  useEffect(() => {
    setLanguage(i18n.language === 'pl' || i18n.language === 'pl-PL' ? pl : en);
  }, [i18n.language, language]);

  const handleClick = () => {
    setShowModal(false);
  };

  if (showModal && booking) {
    return (
      <Modal handleClick={handleClick}>
        <div className={styles.modalRoot}>
          <div>{t('booking.success')}</div>
          <div>
            {t('booking.tableSize')} {booking?.numberOfSeats} {t('booking.when')}{' '}
            {booking.bookingDate.toLocaleDateString('en-GB')} {booking?.bookingTime}
          </div>
        </div>
      </Modal>
    );
  }

  return (
    <div className={styles.root}>
      <h2>{t('booking.book')}</h2>
      <Formik
        initialValues={initValues}
        onSubmit={values => {
          console.log(values);
          setBooking(values);
          setShowModal(true);
        }}
        validationSchema={validationSchema}
      >
        {({ setFieldValue, values }) => (
          <Form className={styles.form}>
            <div className={clsx(styles.numberOfSeats, styles.labelWithInput)}>
              <label htmlFor="numberOfSeats">{t('booking.partySize')}</label>
              <Field as="select" id="numberOfSeats" name="numberOfSeats">
                {numberOfPeople.map(number => (
                  <option key={number.value} value={number.value}>
                    {number.label}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="numberOfSeats" component="div" className={styles.error} />
            </div>
            <div className={clsx(styles.phone, styles.labelWithInput)}>
              <label htmlFor="phone">{t('booking.phone')}</label>
              <Field
                type="text"
                id="phone"
                name="phone"
                placeholder={t('booking.enterPhone')}
                className={styles.numberOfSeatsField}
              />
              <ErrorMessage name="phone" component="div" className={styles.error} />
            </div>
            <div className={clsx(styles.name, styles.labelWithInput)}>
              <label htmlFor="name">{t('booking.fullName')}</label>
              <Field type="text" id="name" name="name" placeholder={t('booking.enterName')} />
              <ErrorMessage name="name" component="div" className={styles.error} />
            </div>
            <div className={clsx(styles.notes, styles.labelWithInput)}>
              <label htmlFor="notes">{t('booking.specialRequest')}</label>
              <Field
                as="textarea"
                rows={4}
                id="notes"
                name="notes"
                placeholder={t('booking.enterSpecialRequest')}
              />
              <ErrorMessage name="notes" component="div" className={styles.error} />
            </div>
            <div className={styles.datePicker}>
              <label htmlFor="bookingDate">{t('booking.date')}</label>
              <DatePicker
                selected={values.bookingDate}
                onChange={date => {
                  setFieldValue('bookingDate', date);
                  setDayOfTheWeek(date?.getDay() as number);
                }}
                className={styles.picker}
                dateFormat="yyyy/dd/MM"
                locale={language}
              />

              {dayOfTheWeek && (
                <>
                  <label htmlFor="bookingTime">{t('booking.time')}</label>
                  <Field as="select" id="bookingTime" name="bookingTime">
                    {options.map(
                      option =>
                        option.dayOfTheWeek.includes(dayOfTheWeek) && (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        )
                    )}
                  </Field>
                  <ErrorMessage name="bookingTime" component="div" className={styles.error} />
                </>
              )}
            </div>

            <button type="submit" className={styles.btn}>
              {t('booking.submit')}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Book;
