import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import QuestionInfo from './page/QuestionInfo';

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