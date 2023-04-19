import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Contnent from './component/Content';

import Login from './pages/Login'
import SignUp from './pages/SignUp'
import MyPage from './pages/MyPage'

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