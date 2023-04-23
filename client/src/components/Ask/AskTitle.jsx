import React from 'react';
import styled from 'styled-components';
import askTitleImg from '../../images/img.png';

export default function AskTitle() {
  return (
    <article>
      <AskTitleStyle>
        <h2>Ask a publick question</h2>
        <img src={askTitleImg} alt="askTitleImg" />
      </AskTitleStyle>

      <AskGuideStyle>
        <h2>Writing a good question</h2>
        <p>You’re ready to ask a programming-related question and this form will help guide you through the process.</p>
        <p>Looking to ask a non-programming question? See the topics here to find a relevant site.</p>
        <h5>Steps</h5>
        <ul>
          <li>Summarize your problem in a one-line title.</li>
          <li>Describe your problem in more detail.</li>
          <li>Describe what you tried and what you expected to happen.</li>
          <li>Add “tags” which help surface your question to members of the community.</li>
          <li>Review your question and post it to the site.</li>
        </ul>
      </AskGuideStyle>
    </article>
  );
}

const AskTitleStyle = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    width: 40rem;
  }
`;

const AskGuideStyle = styled.div`
  border: 0.1rem solid #b0d3ee;
  border-radius: 0.2rem;
  padding: 1.5rem;
  background-color: #ebf4fb;
  li {
    list-style: upper-roman;
    margin-left: 3rem;
  }
`;
