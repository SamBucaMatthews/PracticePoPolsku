import { useState } from "react";

export type FlashcardData = {
    front: string;
    back: string;
};

export default function Flashcard({ front, back }: FlashcardData) {
    const [revealed, setRevealed] = useState(false);

    return (
        <div
            onClick={() => setRevealed((value) => !value)}
            style={{
                width: "300px",
                height: "200px",
                border: "1px solid #ccc",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
                cursor: "pointer",
                userSelect: "none",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                fontSize: "2rem",
                textAlign: "center",
                backgroundColor: revealed ? "red" : "white",
                color: revealed ? "white" : "black",
            }}
        >
            {revealed ? back : front}
        </div>
    );
}