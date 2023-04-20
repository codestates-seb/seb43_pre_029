import { useState } from 'react';

const useInput = () => {
  const [value, setValue] = useState('');

  return {
    value,
    onChange: (value) => setValue(value),
  };
};

export default useInput;
