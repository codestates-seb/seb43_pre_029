import React from 'react';
import styled from 'styled-components';
import home1 from '../image/homeimg1.png';
import home2 from '../image/homeimg2.png';
import home3 from '../image/homeimg3.png';
import home4 from '../image/homeimg4.png';
import home5 from '../image/homeimg5.png';
import home6 from '../image/homeimg6.png';
import home7 from '../image/homeimg7.png';
import home8 from '../image/homeimg8.png';
import home9 from '../image/homeimg9.png';

const Imgstyle = styled.div`
  img {
    margin-top: -2rem;
    width: 100%;
  }
`;

export default function Home() {
  return (
    <div>
      <Imgstyle>
        <img src={home1} alt="" />
        <img src={home2} alt="" />
        <img src={home3} alt="" />
        <img src={home4} alt="" />
        <img src={home5} alt="" />
        <img src={home6} alt="" />
        <img src={home7} alt="" />
        <img src={home8} alt="" />
        <img src={home9} alt="" />
      </Imgstyle>
    </div>
  );
}
