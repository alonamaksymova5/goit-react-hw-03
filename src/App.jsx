import { useEffect, useState } from 'react';
import initialContacts from './components/contacts.json';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';


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

