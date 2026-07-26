import { useEffect, useState } from "react";
import Flashcard from "./Flashcard";
import type { FlashcardData } from "./Flashcard";
import { loadNouns } from "../DataAccess/DataAccess";
import { createNounCaseCard, createNounTranslationCard } from "./CardFactory";
import { useNavigate } from "react-router-dom";

export default function Flashcards() {
    const navigate = useNavigate();
    const [card, setCard] = useState<FlashcardData | null>(null);

    const nounCardFactories = [
        createNounTranslationCard,
        createNounCaseCard,
    ];

    async function load() {
        const nouns = await loadNouns();

        const entries = Object.entries(nouns);

        if (entries.length === 0) {
            return;
        }

        const [lemma, noun] =
            entries[Math.floor(Math.random() * entries.length)];

        const factory =
            nounCardFactories[
            Math.floor(Math.random() * nounCardFactories.length)
            ];

        setCard(factory(lemma, noun));
    }

    useEffect(() => {
        load();
    }, []);

    if (!card) {
        return <>Loading...</>;
    }

    return (
        <div className="flashcards-page">
            <button onClick={() => navigate("/")} style={{ marginBottom: 16 }}>
                ← Back
            </button>
            <Flashcard key={card.front} {...card} />

            <div className="flashcard-actions">
                <button className="action-button wrong" onClick={load}>
                    ❌
                </button>

                <button className="action-button correct" onClick={load}>
                    ✅
                </button>
            </div>
        </div>
    );
}
