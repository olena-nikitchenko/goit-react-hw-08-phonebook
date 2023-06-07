import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from '../../redux/contactsSlice.js';
import { getFilterValue } from '../../redux/filterSlice.js';
import css from './ContactList.module.css';

const ContactList = () => {
  const deleteContactId = async id => {
    try {
      await deleteContact(id);
      toast.success(`Contact deleted `);
    } catch (error) {
      toast.error('Oops! Something went wrong. Please, try again!');
    }
  };

  const filtersContacts = (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const filter = useSelector(getFilterValue);
  const { data: contacts = [], isLoading, error } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const contactsItems = filtersContacts(contacts, filter);
  return (
    <ul className={css.ContactList}>
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}

      {contactsItems.length > 0 ? (
        <>
          {contactsItems.map(({ id, name, phone }) => (
            <li key={id} className={css.ContactListItem}>
              <span className={css.ContactListSpan}>
                {name}: {phone}
              </span>
              <button
                className={css.Btn}
                type="button"
                onClick={() => deleteContactId(id)}
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

export default ContactList;
