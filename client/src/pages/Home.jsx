import React from 'react';
import styled from 'styled-components';
import homeimg from '../image/home_img.png';

const Imgstyle = styled.div`
  img {
    width: 100%;
  }
`;

export default function Home() {
  return (
    <div>
      <Imgstyle>
        <img src={homeimg} alt="" />
      </Imgstyle>
    </div>
  );
}
