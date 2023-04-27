import axios from 'axios';

const headerSearch = async (searchvalueBind, setSearchData) => {
  const [searchValue, setSearchValue] = searchvalueBind;

  try {
    // const reqData = { search_content: searchValue };
    console.log('keyword: ', searchValue);
    const res = await axios.get(`/question/search?keyword=${searchValue}&page=1`);
    setSearchData(res.data.data);
    setSearchValue('');
  } catch (error) {
    console.log(error);
  }
};

export default headerSearch;
