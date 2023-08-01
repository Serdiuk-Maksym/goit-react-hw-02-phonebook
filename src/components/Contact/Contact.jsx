import PropTypes from 'prop-types';
import css from './Contact.module.css';

export function Contact({ contact, onDelItem }) {
  const { name, number } = contact;
  return (
    <contact className={css.contact}>
      <p>
        {name} : {number}
      </p>
      <button className={css.btn} type="button" onClick={onDelItem}>
        Delete
      </button>
    </contact>
  );
}

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
  }),
  onDelItem: PropTypes.func,
};
