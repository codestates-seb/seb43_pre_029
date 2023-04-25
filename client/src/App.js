import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import MyPage from './pages/MyPage';
import QuestionInfo from './pages/QuestionInfo';
import { useState } from 'react';

const App = () => {
  const [isLogin, setIsLogin] = useState(localStorage.getItem('accessToken'));
  // const [m_id] = useState(localStorage.getItem('m_id'));
  const [m_id] = useState(2);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home {...isLogin} />} />
          <Route path="/login" element={isLogin ? <Navigate to="/" /> : <Login />} />
          <Route path="/signup" element={isLogin ? <Navigate to="/" /> : <SignUp />} />
          {/* <Route path="/mypage" element={isLogin ? <MyPage /> : <Navigate to="/login" />} /> */}
          <Route path="/mypage/:id" element={<Navigate to={`/mypage/${m_id}`} />} />
          <Route path={`/mypage/${m_id}`} element={<MyPage m_id={m_id} />} />
          <Route path="/question/:id" element={<QuestionInfo {...isLogin} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
