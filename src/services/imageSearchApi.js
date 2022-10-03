import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const getImages = async (query, page = 1, parPage = 12) => {
  const response = await axios.get(
    `/?q=${query}&page=${page}&key=26861804-fd8fe5ae5bc78c824a9c872d4&image_type=photo&orientation=horizontal&per_page=${parPage}`
  );
  return response.data;
};
