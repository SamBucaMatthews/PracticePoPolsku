import { useState } from "react";

export type FlashcardData = {
    front: string;
    back: string;
};

export default function Flashcard({ front, back }: FlashcardData) {
    const [revealed, setRevealed] = useState(false);

    return (
        <div
            className="flashcard"
            onClick={() => setRevealed((value) => !value)}
            style={{
                backgroundColor: revealed ? "red" : "white",
                color: revealed ? "white" : "black",
            }}
        >
            {revealed ? back : front}
        </div>
    );
}