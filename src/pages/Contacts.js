import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PhonebookForm } from 'components/PhonebookForm/PhonebookForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Section } from 'components/Section/Section';
import { fetchContacts } from 'redux/contacts/operations';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section title="Phonebook">
        <PhonebookForm />
      </Section>

      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </>
  );
}
