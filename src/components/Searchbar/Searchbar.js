import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';

import style from './SearchBar.module.css';

export const SearchBar = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();

    const inputValue = event.currentTarget.children.input.value.trim();

    if (inputValue === '') {
      alert('Please enter search query');
      return;
    }
    onSubmit(event.currentTarget.children.input.value.trim());
  };

  return (
    <header className={style.header}>
      <form className={style.form} onSubmit={handleSubmit}>
        <button type="submit" className={style.button}>
          <BsSearch />
        </button>

        <input
          className={style.input}
          type="text"
          name="input"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};