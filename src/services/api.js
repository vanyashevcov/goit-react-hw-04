import axios from 'axios';

export const fetchArticles = async (query, page, perPage) => {
  const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${query}&page=${page}&hitsPerPage=${perPage}`);
  return response.data;
};