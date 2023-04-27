import axios from 'axios';

const headerSearch = async (searchvalueBind, setSearchData) => {
  const [searchValue, setSearchValue] = searchvalueBind;

  console.log('headerSearch setSearchData: ', setSearchData);
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

const headerSubmit = (e, searchvalueBind, setIsSearched) => {
  e.preventDefault();
  headerSearch(searchvalueBind);
  setIsSearched(true);
};

export { headerSearch, headerSubmit };
