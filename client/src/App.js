import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import MyPage from './pages/MyPage'
import Home from './pages/Home';
import QuestionInfo from './pages/QuestionInfo';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/question/:id" element={<QuestionInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;