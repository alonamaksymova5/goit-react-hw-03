import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

const ContactList = ({ list, onDelete }) => {
  return (
    <>
      <ul className={s.list}>{list.map((item) => (
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
