import './App.css'

import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Flashcards from './Flashcards/Flashcards';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flashcards/" element={<Flashcards />} />
      </Routes>
    </HashRouter>
  );
}
