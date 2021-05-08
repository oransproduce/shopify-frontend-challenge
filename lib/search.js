import axios from 'axios';
import { debounce } from 'lodash';

const searchMovies = (query, updateFunction) => {
  if (!query) {
    return;
  }
  axios.get(`/search/${query}`).then(({ data }) => {
    if (!data.Search) {
      return;
    }
    console.log(data.Search);
    updateFunction(data.Search);
  }).catch(() => {
    console.log('Error searching movies');
  });
};

export default debounce(searchMovies, 250);
