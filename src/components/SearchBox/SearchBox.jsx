import s from './SearchBox.module.css';

const SearchBox = ({ value, onUserText }) => {
  return (
    <>
      <p className={s.text}>Find contacts by name</p>
      <input type="text" value={value} onChange={(e) => onUserText(e.target.value)} className={s.input} />
    </>
  );
};

export default SearchBox;
