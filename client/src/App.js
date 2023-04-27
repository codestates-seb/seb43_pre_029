import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home, Login, SignUp, MyPage, QuestionInfo, Ask } from './pages/LazyLoding'

import { Suspense, useState } from 'react';
import Loding from './components/Loding';

import axios from 'axios';
axios.defaults.baseURL = 'http://ec2-13-125-71-49.ap-northeast-2.compute.amazonaws.com:8080';

const App = () => {
  const [isLogin, setIsLogin] = useState(localStorage.getItem('access_token'));
  const m_id = localStorage.getItem('m_id');
  const searchvalueBind = useState('');
  const [isSearched, setIsSearched] = useState(false);
  const isSearchBind = [isSearched, setIsSearched];

  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<Loding />}>
          <Routes>
            <Route path="/" element={<Home isLogin={isLogin} searchvalueBind={searchvalueBind} isSearchBind={isSearchBind} />} />
            <Route path="/login" element={isLogin ? <Navigate to="/" /> : <Login searchvalueBind={searchvalueBind} />} />
            <Route path="/signup" element={isLogin ? <Navigate to="/" /> : <SignUp searchvalueBind={searchvalueBind} />} />
            <Route path="/mypage/:id" element={isLogin ? <Navigate to={`/mypage/${m_id}`} /> : <Login />} />
            <Route path={`/mypage/${m_id}`} element={<MyPage m_id={m_id} searchvalueBind={searchvalueBind} />} />
            <Route path="/question/:p_id" element={<QuestionInfo isLogin={isLogin} searchvalueBind={searchvalueBind} isSearchBind={isSearchBind} />} />
            <Route path="/question/ask" element={<Ask />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div >
  );
};

export default App;
