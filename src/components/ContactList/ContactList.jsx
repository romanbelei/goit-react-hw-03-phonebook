import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

function ContactList({ state, onRemoveContact }) {
  return (
    <ul className={styles.contactList}>
      {state.contacts
        .filter(e => e.name.toLowerCase().includes(state.filter.toLowerCase()))
        .map(contact => {
          return (
            <li className={styles.itemList} key={contact.id}>
              {contact.name}: {contact.number}
              <button
                className={styles.buttonDelete}
                key={contact.id}
                name={contact.name}
                // className={styles.btn}
                type="button"
                onClick={() => onRemoveContact(contact.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
}

ContactList.propTypes = {
  //   onRemoveContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
