import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import MyPage from './pages/MyPage';
import QuestionInfo from './pages/QuestionInfo';
import { useState } from 'react';

const App = () => {
  /**
   * setIsLogin
   * Home이나 mypage question 등에서 logout 버튼 클릭시
   * localStorage.clear()
   */
  const [isLogin, setIsLogin] = useState(localStorage.getItem('access_token'));

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home {...isLogin} />} />
          <Route path="/login" element={isLogin ? <Navigate to="/" /> : <Login />} />
          <Route path="/signup" element={isLogin ? <Navigate to="/" /> : <SignUp />} />
          <Route path="/mypage" element={isLogin ? <MyPage /> : <Navigate to="/login" />} />
          <Route path="/question/:id" element={<QuestionInfo {...isLogin} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
