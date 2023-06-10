import { useDispatch, useSelector } from 'react-redux';
import { selectAllContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import toast from 'react-hot-toast';
import { nanoid } from 'nanoid';
import { BsJournalPlus } from 'react-icons/bs';
import { BsTelephone } from 'react-icons/bs';
import css from './Phonebook.module.css';

export const PhonebookForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const number = form.number.value;

    if (contacts.find(cont => cont.name === name)) {
      toast.error(`${name} is already your friend...`);
      return;
    }

    dispatch(
      addContact({
        id: nanoid(),
        name,
        number,
      })
    );
    toast.success(`${name} is now on your Friends List`);
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.Form}>
      <label className={css.Label}>
        Name <BsJournalPlus />
        <input
          className={css.Input}
          type="text"
          name="name"
          placeholder="Enter name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.Label}>
        Number <BsTelephone />
        <input
          className={css.Input}
          type="tel"
          name="number"
          placeholder="Enter phone number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={css.Btn}>
        Add contact
      </button>
    </form>
  );
};
