import { useSelector, useDispatch } from 'react-redux';
import {
  selectAllContacts,
  selectLoading,
} from '../../redux/contacts/selectors';
import { getFilterValue } from 'redux/filterSlice.js';
import { deleteContact } from 'redux/contacts/operations.js';
import { Loader } from '../Loader/Loader';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectAllContacts);
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();

  const filter = useSelector(getFilterValue);
  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <ul className={css.ContactList}>
      {isLoading && <Loader />}
      {contacts?.length > 0 ? (
        <>
          {filterContacts.map(({ id, name, number }) => (
            <li key={id} className={css.ContactListItem}>
              <p>
                <span>{name} :</span>
                {number}
              </p>
              <button
                className={css.Btn}
                type="button"
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </button>
            </li>
          ))}
        </>
      ) : (
        <p>No added contacts</p>
      )}
    </ul>
  );
};
