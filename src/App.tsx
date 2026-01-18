import './App.css'

import { HashRouter, Routes, Route } from "react-router-dom";
import NounsCasePractice from "./NounsCasePractice";
import Home from './Home';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nouns" element={<NounsCasePractice />} />
      </Routes>
    </HashRouter>
  );
}
