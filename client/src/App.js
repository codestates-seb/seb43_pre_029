import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Contnent from './component/Content';

import Login from './page/Login'
import SignUp from './page/SignUp'
import MyPage from './page/MyPage'

const App = () => {
  return (
    <div className="App">
      {/* <Header/> */}
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Contnent />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;