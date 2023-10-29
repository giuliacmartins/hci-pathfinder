import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/homePage/Home';
import TableOfContents from './components/tableOfContents/TableOfContents';
import TableOfContents2 from './components/tableOfContents/TableOfContents2';
import TableOfContents3 from './components/tableOfContents/TableOfContents3';
import SpellPages from './components/spellPages/SpellPages';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tableOfContents" element={<TableOfContents />} />
          <Route path="/tableOfContents2" element={<TableOfContents2 />} />
          <Route path="/tableOfContents3" element={<TableOfContents3 />} />
          <Route path="/spellPages" element={<SpellPages />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
