import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import QuestionInfo from './pages/QuestionInfo';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/question/:id" element={<QuestionInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
