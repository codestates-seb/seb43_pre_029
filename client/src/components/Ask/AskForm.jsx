import React from 'react';
import styled from 'styled-components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.flexDirection ? props.flexDirection : 'row')};
`;

const Box = styled.div`
  background-color: ${(props) => (props ? props.backColor : 'rgb(248, 249, 249)')};
  padding: 24px;
  width: 1080px;
  border: 1px solid lightgrey;
  margin-top: 20px;
`;

const AskForm = () => {
  return (
    <form>
      <Box backColor="rgb(255, 255, 255)">
        <label htmlFor="">What are the details of your problem?</label>
        <p>Introduce the problem and expand on what you put in the title. Minimum 20 characters.</p>
        <ReactQuill theme="snow" />
      </Box>

      <Box backColor="rgb(255, 255, 255)">
        <label htmlFor="">What did you try and what were you expecting?</label>
        <p>Describe what you tried, what you expected to happen, and what actually resulted. Minimum 20 characters.</p>
        <ReactQuill />
      </Box>

      <Box backColor="rgb(255, 255, 255)">
        <Flex flexDirection="column">
          <label htmlFor="">Tags</label>
          <p>Add up to 5 tags to describe what your question is about. Start typing to see suggestions.</p>
          <input type="text" placeholder="e.g. (.net json vba)" />
        </Flex>
      </Box>

      <Box backColor="rgb(255, 255, 255)">
        <Flex flexDirection="column">
          <label htmlFor="">Review questions already on Stack Overflow to see if your question is a duplicate.</label>
          <p>
            Clicking on these questions will open them in a new tab for you to review. Your progress here will be saved
            so you can come back and continue.
          </p>
          <input type="text" placeholder="Do any of these posts answer your question?" />
        </Flex>
      </Box>
    </form>
  );
};

export default AskForm;
