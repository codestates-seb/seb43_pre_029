import React from 'react';
import styled from 'styled-components';
import homeimg from '../assets/home_img.png';

const Imgstyle = styled.div`
  img {
    padding-top: 2.8125rem;
    width: 100%;
  }
`;

export default function Home() {
  return (
    <Imgstyle>
      <img src={homeimg} alt="" />
    </Imgstyle>
  );
}
