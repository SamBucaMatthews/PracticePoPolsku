import './App.css'

import { HashRouter, Routes, Route } from "react-router-dom";
import NounsCasePractice from "./Nouns/NounsCasePractice";
import Home from './Home';
import NounsList from './Nouns/NounsList';
import NounDetails from './Nouns/NounDetails';
import NounsPrepositionsPractice from './Nouns/NounsPrepositionsPractice';
import AdjectivesList from './Adjectives/AdjectivesList';
import AdjectiveDetails from './Adjectives/AdjectiveDetails';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nouns/" element={<NounsList />} />
        <Route path="/nouns/:lemma" element={<NounDetails />} />
        <Route path="/nouns/case-practice" element={<NounsCasePractice />} />
        <Route path="/nouns/prepositions-practice" element={<NounsPrepositionsPractice />} />
        <Route path="/adjectives/" element={<AdjectivesList />} />
        <Route path="/adjectives/:lemma" element={<AdjectiveDetails />} />
      </Routes>
    </HashRouter>
  );
}
