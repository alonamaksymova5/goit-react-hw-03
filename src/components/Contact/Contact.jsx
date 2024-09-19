import s from './Contact.module.css';

const Contact = ({ id, name, phone, onDelete }) => {
  return (
    <>
      <li className={s.item}>
        <div>
          <p>{name}</p>
          <p>{phone}</p>
        </div>
        <button type='button' onClick={() => onDelete(id)} className={s.btn}>Delete</button>
      </li>
    </>
  );
};

export default Contact;
