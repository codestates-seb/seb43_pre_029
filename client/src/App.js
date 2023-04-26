import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home, Login, SignUp, MyPage, QuestionInfo, Ask } from './pages/LazyLoding'

import { Suspense, useState } from 'react';
import Loding from './components/Loding';

const App = () => {
  const [isLogin, setIsLogin] = useState(localStorage.getItem('accessToken'));
  const m_id = localStorage.getItem('m_id');

  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<Loding />}>
          <Routes>
            <Route path="/" element={<Home {...isLogin} />} />
            <Route path="/login" element={isLogin ? <Navigate to="/" /> : <Login />} />
            <Route path="/signup" element={isLogin ? <Navigate to="/" /> : <SignUp />} />
            <Route path="/mypage/:id" element={isLogin ? <Navigate to={`/mypage/${m_id}`} /> : <Login />} />
            <Route path={`/mypage/${m_id}`} element={<MyPage m_id={m_id} />} />
            <Route path="/question/:id" element={<QuestionInfo {...isLogin} />} />
            <Route path="/question/ask" element={<Ask />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div >
  );
};

export default App;
