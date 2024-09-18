import './App.css'
import { useEffect, useState } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

const initialContacts = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
];

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const data = window.localStorage.getItem("contacts");
    if (data !== null) {
      return JSON.parse(data);
    }
    return initialContacts;
  });
  
  const [userText, setUserText] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(userText.toLowerCase())
  );
  

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={userText} onUserText={setUserText} />
      <ContactList list={visibleContacts} onDelete={deleteContact} />
    </div>
  );
};

export default App;

