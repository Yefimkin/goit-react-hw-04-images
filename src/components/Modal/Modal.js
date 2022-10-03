import PropTypes from 'prop-types';
import { useEffect } from 'react';
import s from './Modal.module.css';

export const Modal = ({ url, alt, closeModal }) => {
  useEffect(() => {
    window.addEventListener('keydown', closeModal);

    return () => {
      window.removeEventListener('keydown', closeModal);
    };
  }, [closeModal]);

  return (
    <div className={s.Overlay} onClick={e => closeModal(e)}>
      (
      <div>
        <img src={url} alt={alt} className={s.Modal} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};