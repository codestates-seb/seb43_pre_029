import Contnent from './component/Content';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Contnent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;