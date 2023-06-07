import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from '../../redux/contactsSlice.js';
import css from './Phonebook.module.css';

const PhonebookForm = () => {
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [addContact] = useAddContactMutation();
  const { data } = useGetContactsQuery();

  const reset = () => {
    setNewName('');
    setNewPhone('');
  };

  const addNumberContact = async () => {
    const newContact = { name: newName, phone: newPhone };

    const isExistContact = data.find(
      contact =>
        contact.name === newContact.name && contact.phone === newContact.phone
    );

    if (isExistContact) {
      toast.error(
        `Contact with the name ${newContact.name} and phone number ${newContact.phone} already exists`
      );
      return;
    }

    try {
      await addContact(newContact);
      toast.success(`Contact ${newContact.name} added`);
    } catch (error) {
      toast.error('Oops! Something went wrong. Please try again!');
    }
  };

  const handleAddContacts = e => {
    e.preventDefault();
    addNumberContact();
    reset();
  };

  return (
    <form onSubmit={handleAddContacts} className={css.Form}>
      <label className={css.Label}>
        Name
        <input
          type="text"
          placeholder="Enter name"
          name="name"
          pattern="[A-Za-z\s]+"
          required
          value={newName}
          onChange={e => setNewName(e.target.value)}
          className={css.Input}
        />
      </label>
      <label className={css.Label}>
        Number
        <input
          type="tel"
          placeholder="Enter number"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={newPhone}
          onChange={e => setNewPhone(e.target.value)}
          className={css.Input}
        />
      </label>
      <button type="submit" className={css.Btn}>
        Add contact
      </button>
    </form>
  );
};

export default PhonebookForm;
