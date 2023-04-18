import styled from 'styled-components';
import Login from './page/Login'
import SignUp from './page/SignUp'
import MyPage from './page/MyPage'

/** 설명: FlexBox 센터로 안가서 임의로 만든 스타일 컴포넌트 */
const AppSample = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  background: #F1F2F3;

  height: 100vh;
`

function App() {
  return (
    // <div className="App">
    <AppSample>
      {/* <Login /> */}
      {/* <SignUp /> */}
      <MyPage />
    </AppSample>
  );
}

export default App;
