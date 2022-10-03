import axios from "axios";

const fetchPicturesWithQuery = (searchQuery, page = 1) => {
	return axios
		.get(
			`https://pixabay.com/api/?key=26861804-fd8fe5ae5bc78c824a9c872d4&q=${searchQuery}&image_type=photo&per_page=15&page=${page}`
		)
		.then((response) => response.data.hits);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	fetchPicturesWithQuery
};


