import React from 'react';
import { ToastContainer } from 'react-toastify';
import PhonebookForm from './components/PhonebookForm/PhonebookForm.js';
import Section from './components/Section/Section.js';
import ContactList from './components/ContactList/ContactList.js';
import Filter from './components/Filter/Filter.js';

const App = () => {
  return (
    <>
      <Section title="Phonebook">
        <PhonebookForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default App;
