// import s from './Contact.module.css';

const Contact = ({ id, name, phone, onDelete }) => {
  return (
    <>
      <li>
        <div>
          <p>{name}</p>
          <p>{phone}</p>
        </div>
        <button type='button' onClick={() => onDelete(id)}>Delete</button>
      </li>
    </>
  );
};

export default Contact;
