import React from 'react';
import QuestItem from './QuestItem';

const SearchList = ({ searchvalueBind }) => {
  const [searchValue] = searchvalueBind;

  return (
    <div>
      {searchValue.map((item) => (
        <QuestItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default SearchList;
