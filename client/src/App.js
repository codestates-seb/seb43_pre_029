import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import MyPage from './pages/MyPage';
import QuestionInfo from './pages/QuestionInfo';
import { useState } from 'react';
import Loding from './components/Loding';
import Ask from './pages/Ask';

const App = () => {
  const [isLogin, setIsLogin] = useState(localStorage.getItem('accessToken'));
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home {...isLogin} />} />
          <Route path="/login" element={isLogin ? <Navigate to="/" /> : <Login />} />
          <Route path="/signup" element={isLogin ? <Navigate to="/" /> : <SignUp />} />
          <Route path="/mypage" element={isLogin ? <MyPage /> : <Navigate to="/login" />} />
          <Route path="/question/:id" element={<QuestionInfo {...isLogin} />} />
          <Route path="/loding" element={<Loding />} />
          <Route path="/question/ask" element={<Ask />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
