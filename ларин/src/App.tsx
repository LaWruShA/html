import { Routes, Route, Link } from 'react-router-dom';

import { First } from './pages/first';
import { About } from './pages/third';
import { Second } from './pages/second';

function App() {
  return (
      <>
        <header>
          <Link to="/">1</Link>
          <Link to="/posts">2</Link>
          <Link to="/about">3</Link>
        </header>
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Second />} />
        </Routes>
      </>
  );
}

export default App;

