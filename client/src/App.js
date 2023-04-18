import styled from 'styled-components';
import Login from './component/Login/Login';
import SignUp from './component/SignUp/SignUp'

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
      <SignUp />
    </AppSample>
  );
}

export default App;
