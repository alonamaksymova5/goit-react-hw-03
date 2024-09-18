import Contact from '../Contact/Contact';

const ContactList = ({ list, onDelete }) => {
  return (
    <>
      <ul>{list.map((item) => (
        <Contact
          key={item.id}
          name={item.name}
          phone={item.number}
          onDelete={onDelete}
          id={item.id} />
      ))}
      </ul>
    </>
  );
};


export default ContactList;
