import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contnent from './component/Content';

import Login from './page/Login'
import SignUp from './page/SignUp'
import MyPage from './page/MyPage'

// import styled from 'styled-components';
/** 설명: FlexBox 센터로 안가서 임의로 만든 스타일 컴포넌트 */
// const AppSample = styled.div`
//   display: flex;
//   justify-content: center;
//   align-content: center;
//   background: #F1F2F3;

//   height: 100vh;
// `

const App = () => {
  return (
    <div className="App">
      {/* <AppSample> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Contnent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </BrowserRouter>
      {/* </AppSample> */}
    </div>
  );
};

export default App;