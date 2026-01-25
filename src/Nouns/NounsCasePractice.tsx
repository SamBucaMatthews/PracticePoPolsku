import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loadRandomNoun } from "../DataAccess/DataAccess";
import type { NounCases } from "../../types/Cases";

interface PracticeItem {
    lemma: string;
    targetCase: keyof NounCases;
    correctAnswer: string;
    singularOrPlural: "singular" | "plural";
}

export default function NounsCasePractice() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [practiceItem, setPracticeItem] = useState<PracticeItem | null>(null);
    const [input, setInput] = useState("");

    const load = useCallback(async () => {
        setLoading(true);

        const noun = await loadRandomNoun();
        const singularOrPlural = Math.random() < 0.5 ? "singular" : "plural";
        const cases = singularOrPlural === "singular"
            ? noun.cases.singular
            : noun.cases.plural;

        const caseKeys = Object.keys(cases).filter(c => c !== "nominative") as (keyof NounCases)[];
        const targetCase = caseKeys[Math.floor(Math.random() * caseKeys.length)];

        setPracticeItem({
            lemma: cases.nominative,
            targetCase,
            correctAnswer: cases[targetCase],
            singularOrPlural,
        });

        setInput("");
        setLoading(false);
    }, []);

    if (!practiceItem && !loading) {
        load();
    }

    if (!practiceItem) {
        return <p style={{ padding: 24, fontSize: 18 }}>Loading...</p>;
    }

    function checkAnswer() {
        const isCorrect =
            input.trim().toLowerCase() ===
            practiceItem?.correctAnswer.toLowerCase();

        alert(isCorrect ? "✔ Correct!" : `✘ Wrong. Correct: ${practiceItem?.correctAnswer}`);
    }

    return (
        <div style={{ padding: 24, maxWidth: 480, margin: "0 auto" }}>
            <button onClick={() => navigate("/")} style={{ marginBottom: 16 }}>
                ← Back
            </button>

            <h2>Nouns Case Practice</h2>

            <div>
                {practiceItem.lemma} ({practiceItem.singularOrPlural})
            </div>
            <div>Target case: {practiceItem.targetCase}</div>

            <div style={{ marginTop: 12 }}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            </div>

            <div style={{ marginTop: 12 }}>
                <button onClick={checkAnswer}>Check</button>
                <button onClick={load} style={{ marginLeft: 8 }}>
                    Next
                </button>
            </div>
        </div>
    );
}
