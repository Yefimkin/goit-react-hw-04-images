import PropTypes from 'prop-types';
import style from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({
  smallImage,
  largeImage,
  alt,
  onImageClick,
}) => {
  return (
    <li>
      <img
        src={smallImage}
        alt={alt}
        className={style.imageItem}
        data-original-img={largeImage}
        data-alt={alt}
        onClick={e => onImageClick(e)}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  smallImage: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onImageClick: PropTypes.func.isRequired,
};