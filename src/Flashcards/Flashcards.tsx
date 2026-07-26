import { useEffect, useState } from "react";
import Flashcard from "./Flashcard";
import type { FlashcardData } from "./Flashcard";
import { loadNouns } from "../DataAccess/DataAccess";
import { createNounTranslationCard } from "./CardFactory";

export default function Flashcards() {
    const [card, setCard] = useState<FlashcardData | null>(null);

    async function load() {
        const nouns = await loadNouns();

        const entries = Object.entries(nouns);

        if (entries.length === 0) {
            return;
        }

        const [lemma, noun] =
            entries[Math.floor(Math.random() * entries.length)];

        setCard(createNounTranslationCard(lemma, noun));
    }

    useEffect(() => {
        load();
    }, []);

    if (!card) {
        return <>Loading...</>;
    }

    return (
        <div>
            <Flashcard key={card.front}{...card} />

            <div>
                <button onClick={load}>
                    Next
                </button>
            </div>
        </div>
    );
}
