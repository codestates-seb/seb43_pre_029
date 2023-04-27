import React, { useState } from 'react';
import QuestItem from './QuestItem';
import { useEffect } from 'react';
import { headerSearch } from '../../logic/headerLogic';

const SearchList = ({ searchvalueBind }) => {
  const [searchData, setSearchData] = useState([]);
  console.log('SearchList setSearchData: ', setSearchData);
  useEffect(() => {
    headerSearch(searchvalueBind, setSearchData);
  }, [searchvalueBind]);

  return (
    <div>
      {searchData.map((item) => (
        <QuestItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default SearchList;
