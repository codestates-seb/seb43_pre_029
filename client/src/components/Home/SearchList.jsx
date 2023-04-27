import React, { useState } from 'react';
import QuestItem from './QuestItem';
import { useEffect } from 'react';
import headerSearch from '../../logic/headerSearch';

const SearchList = ({ searchvalueBind }) => {
  const [searchData, setSearchData] = useState([]);
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
