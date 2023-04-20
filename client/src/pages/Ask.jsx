import React from 'react';
import styled from 'styled-components';
import questionimg from '../images/questionsform-img.png';
import pencil from '../images/pencil.png';
import AskForm from '../components/AskForm';

const Wrapper = styled.div`
  padding-top: 2.8125rem;
  margin: 0 auto;
  width: 1080px;
  background-color: rgb(248, 249, 249);
`;

const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.flexDirection ? props.flexDirection : 'row')};
`;

const TitleImg = styled(Flex)`
  img {
    height: 130px;
  }
`;

const Box = styled.div`
  background-color: ${(props) => (props ? props.backColor : 'rgb(248, 249, 249)')};
  padding: 24px;
  width: 1080px;
  border: 1px solid lightgrey;
  margin-top: 20px;
`;

const Btn = styled.button`
  background-color: rgb(9, 149, 255);
  color: rgb(255, 255, 255);
  width: 50px;
  height: 38px;
  border: none;
  border-radius: 3px;
`;

const Ask = () => {
  return (
    <Wrapper>
      <TitleImg>
        <h1>Ask a public question</h1>
        <img className="questions--form__img" src={questionimg} alt="" />
      </TitleImg>
      <Box backColor="rgb(235, 244, 251)">
        <h2>Writing a good question</h2>
        <p>
          You’re ready to ask a programming-related question and this form will help guide you through the process.
          Looking to ask a non-programming question? See the topics here to find a relevant site.
        </p>
        <h5>Steps</h5>
        <ul>
          <li>Summarize your problem in a one-line title.</li>
          <li>Describe your problem in more detail.</li>
          <li>Describe what you tried and what you expected to happen.</li>
          <li>Add “tags” which help surface your question to members of the community.</li>
          <li>Review your question and post it to the site.</li>
        </ul>
      </Box>
      <Flex flexDirection="column">
        <Box>
          <div>Writing a good title</div>
        </Box>
        <Box backColor="rgb(255, 255, 255)">
          <Flex>
            <img src={pencil} alt="" />
            <div>
              <p>Your title should summarize the problem.</p>
              <p>
                You might find that you have a better idea of your title after writing out the rest of the question.
              </p>
            </div>
          </Flex>
        </Box>
      </Flex>
      <Box backColor="rgb(255, 255, 255)">
        <Flex flexDirection="column">
          <label htmlFor="">Title</label>
          <label htmlFor="">Be specific and imagine you’re asking a question to another person.</label>
          <input
            type="text"
            placeholder="e.g is there an R function for finding the index of an element in a vector?"
          />
          <Btn>Next</Btn>
        </Flex>
      </Box>
      <AskForm />
    </Wrapper>
  );
};

export default Ask;
