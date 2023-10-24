import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/homePage/Home';
import TableOfContents from './components/tableOfContents/TableOfContents';
import SpellPages from './components/spellPages/SpellPages';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tableOfContents" element={<TableOfContents />} />
          <Route path="/spellPages" element={<SpellPages />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
