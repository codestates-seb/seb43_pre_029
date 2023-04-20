import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Editor({ name, setInputs, inputs }) {
  function handleChange(value) {
    setInputs({ ...inputs, [name]: value });
    console.log(value);
  }

  return (
    <ReactQuill
      style={{ height: '200px', fontSize: '16px' }}
      value={inputs[name]}
      onChange={handleChange}
      placeholder="Write something..."
    />
  );
}

export default Editor;
