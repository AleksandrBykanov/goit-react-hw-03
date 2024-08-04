import css from "../SearchBox/SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <label htmlFor="search" className={css.label}>Find contacts by name
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={onChange}
        name="search"
      />
    </label>
  );
};
export default SearchBox;
