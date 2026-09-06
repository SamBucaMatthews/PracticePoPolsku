import { useEffect, useMemo, useState } from "react";
import Flashcard from "./Flashcard";
import type { FlashcardData } from "./Flashcard";
import { loadNouns } from "../DataAccess/DataAccess";
import {
    createMianownikSingularPluralCard,
    createNounCaseCard,
    createNounTranslationCard,
} from "./CardFactory";
import { useNavigate } from "react-router-dom";
import type { Noun } from "../../types/Noun";

export default function Flashcards() {
    const navigate = useNavigate();

    const [nouns, setNouns] = useState<Noun[]>([]);
    const [card, setCard] = useState<FlashcardData | null>(null);

    const nounCardFactories = useMemo(
        () => [
            createMianownikSingularPluralCard,
            createNounTranslationCard,
            createNounCaseCard,
        ],
        []
    );

    useEffect(() => {
        async function load() {
            const nouns = await loadNouns();
            const entries = Object.values(nouns);

            setNouns(entries);

            if (entries.length > 0) {
                const noun =
                    entries[Math.floor(Math.random() * entries.length)];
                const factory =
                    nounCardFactories[
                    Math.floor(Math.random() * nounCardFactories.length)
                    ];

                setCard(factory(noun));
            }
        }

        load();
    }, [nounCardFactories]);

    // Pick a new card from the cached nouns
    function loadNextCard() {
        if (nouns.length === 0) {
            return;
        }

        const noun =
            nouns[Math.floor(Math.random() * nouns.length)];

        const factory =
            nounCardFactories[
            Math.floor(Math.random() * nounCardFactories.length)
            ];

        setCard(factory(noun));
    }

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
                <button
                    className="action-button wrong"
                    onClick={loadNextCard}
                >
                    ❌
                </button>

                <button
                    className="action-button correct"
                    onClick={loadNextCard}
                >
                    ✅
                </button>
            </div>
        </div>
    );
}
