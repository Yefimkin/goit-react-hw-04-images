import { useState, useEffect } from 'react';
import { Container } from './Container/Container';
import { Search } from './Search/Search';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';
import { getImages } from '../services/imageSearchApi';

export const App = () => {
  const [images, setImages] = useState([]);
  const [originalImageUrl, setOriginalImageUrl] = useState('');
  const [ImageAlt, setImageAlt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (query) {
      async function updateImages() {
        try {
          setIsLoading(true);
          const response = await getImages(query, page);
          const data = await response.hits;
          if (data.length === 0) {
            alert(`We can't find any images`);
          }
          if (page === 1) {
            setTotalPages(Math.ceil(response.total / 12));
          }

          setImages(prevState => [...prevState, ...data]);
          setIsLoading(false);
        } catch (error) {
          console.log(error);
        }
      }
      updateImages();
    }
  }, [query, page]);

  const handleSubmitForm = value => {
    if (query === value) {
      alert('You are entered same query');
      return;
    }

    if (images.length > 0) {
      setImages([]);
    }
    setQuery(value);
    setPage(1);
  };

  const handleBtnClick = () => {
    setPage(prevState => prevState + 1);
  };

  const handleImageClick = event => {
    setOriginalImageUrl(event.currentTarget.dataset.originalImg);
    setImageAlt(event.currentTarget.dataset.alt);
  };

  const closeModal = event => {
    if (event.target === event.currentTarget || event.key === 'Escape') {
      setOriginalImageUrl('');
    }
  };

  const canLoadMore = images.length > 0 && page !== totalPages;

  return (
    <Container>
      <Search onSubmit={handleSubmitForm} />
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {isLoading && <Loader />}
      {canLoadMore && <Button loadMode={handleBtnClick} />}
      {originalImageUrl && (
        <Modal url={originalImageUrl} alt={ImageAlt} closeModal={closeModal} />
      )}
    </Container>
  );
};

export default App;
