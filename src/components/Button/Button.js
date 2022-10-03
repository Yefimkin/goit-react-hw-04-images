import PropTypes from 'prop-types';
import style from './Button.module.css';

export const Button = ({ loadMode }) => {
  return (
    <button type="button" className={style.button} onClick={loadMode}>
      Load more
    </button>
  );
};

Button.propTypes = { loadMode: PropTypes.func.isRequired };