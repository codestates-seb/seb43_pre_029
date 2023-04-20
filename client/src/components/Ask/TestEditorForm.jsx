import React, { useState } from 'react';
import styled from 'styled-components';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftjsToHtml from 'draftjs-to-html';

const Container = styled.div`
  width: 100%;
`;

const RowBox = styled.div`
  width: 100%;
  display: flex;
`;

const Viewer = styled.div`
  width: calc(50% - 40px);
  height: 400px;
  padding: 20px;
  margin-top: 20px;
  border: 2px solid gray;
`;

const Draft = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [htmlString, setHtmlString] = useState('');
  console.log(htmlString);

  const updateTextDescription = async (state) => {
    await setEditorState(state);
    const html = draftjsToHtml(convertToRaw(editorState.getCurrentContent()));
    setHtmlString(html);
  };

  const uploadCallback = () => {
    console.log('이미지 업로드');
  };

  return (
    <>
      <div>draft</div>
      <Container>
        <Editor
          placeholder="질문 작성해주세요."
          editorState={editorState}
          onEditorStateChange={updateTextDescription}
          toolbar={{
            image: { uploadCallback: uploadCallback },
          }}
          localization={{ locale: 'ko' }}
          editorStyle={{
            height: '400px',
            width: '100%',
            border: '3px solid lightgray',
            padding: '20px',
          }}
        />
      </Container>
      <RowBox>
        <Viewer dangerouslySetInnerHTML={{ __html: htmlString }} />
        <Viewer>{htmlString}</Viewer>
      </RowBox>
    </>
  );
};

export default Draft;
