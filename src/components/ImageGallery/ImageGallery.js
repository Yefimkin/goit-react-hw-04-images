import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import style from './ImageGallery.module.css';

export const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={style.imageGallery}>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          smallImage={webformatURL}
          largeImage={largeImageURL}
          alt={tags}
          onImageClick={onImageClick}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
  onImageClick: PropTypes.func.isRequired,
};