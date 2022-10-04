import PropTypes from 'prop-types';
import { useEffect } from 'react';
import styles from './Modal.module.css';

export const Modal = ({ url, alt, closeModal }) => {
  useEffect(() => {
    window.addEventListener('keydown', closeModal);

    return () => {
      window.removeEventListener('keydown', closeModal);
    };
  }, [closeModal]);

  return (
    <div className={styles.overlay} onClick={event => closeModal(event)}>
      (
      <div>
        <img src={url} alt={alt} className={styles.modal} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};