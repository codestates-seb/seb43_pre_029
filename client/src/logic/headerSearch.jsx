import axios from 'axios';

const headerSearch = async (keyword, setKeyword) => {
  try {
    const reqData = { search_content: keyword };
    console.log('keyword: ', keyword);
    const res = await axios.post(`/search?q=${keyword}`, reqData);
    setKeyword(res);
  } catch (error) {
    console.log(error);
  }
};

export default headerSearch;
