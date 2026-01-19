import { useNavigate } from "react-router-dom";
import { loadRandomNoun } from "../DataAccess/DataAccess";
import { useCallback, useState } from "react";
import type { Cases } from "../../types/Cases";
import { PrepositionCaseMap } from "../PrepositionMapper";

interface CaseValue {
    key: keyof Cases;
    value: string;
}

interface PracticeItem {
    lemma: string;
    cases: Cases;
    staticOrMotion: "static" | "motion";
    singularOrPlural: "singular" | "plural";
    preposition: string;
    correctCase: CaseValue;
}

export default function NounsPrepositionsPractice() {
    const navigate = useNavigate();
    const [practiceItem, setPracticeItem] = useState<PracticeItem | null>(null);
    const [loading, setLoading] = useState(false);

    const load = useCallback(async () => {
        setLoading(true);

        const prepositions = Object.keys(PrepositionCaseMap);
        const preposition = prepositions[Math.floor(Math.random() * prepositions.length)];
        const rule = PrepositionCaseMap[preposition];

        const staticOrMotion: "static" | "motion" =
            rule.static && !rule.motion
                ? "static"
                : !rule.static && rule.motion
                    ? "motion"
                    : Math.random() < 0.5
                        ? "static"
                        : "motion";

        const noun = await loadRandomNoun();
        const singularOrPlural = Math.random() < 0.5 ? "singular" : "plural";
        const cases = singularOrPlural === "singular" ? noun.cases.singular : noun.cases.plural;

        const correctCaseKey = rule[staticOrMotion]!;
        const correctCase: CaseValue = {
            key: correctCaseKey,
            value: cases[correctCaseKey],
        };

        setPracticeItem({
            lemma: cases.nominative,
            cases,
            correctCase,
            preposition,
            staticOrMotion,
            singularOrPlural,
        });

        setLoading(false);
    }, []);

    if (!practiceItem && !loading) {
        load();
    }

    if (!practiceItem) {
        return <p style={{ padding: 24, fontSize: 18 }}>Loading...</p>;
    }

    function checkAnswer(chosenKey: keyof Cases) {
        const correctKey = practiceItem?.correctCase.key;
        const isCorrect = chosenKey === correctKey;
        alert(isCorrect ? "✔ Correct!" : `✘ Wrong. Correct: ${correctKey}`);
    }

    return (
        <div style={{ padding: 24, maxWidth: 500, margin: "0 auto", fontFamily: "sans-serif" }}>
            <button
                onClick={() => navigate("/")}
                style={{
                    marginBottom: 16,
                    padding: "6px 12px",
                    borderRadius: 6,
                    border: "1px solid #ccc",
                    cursor: "pointer",
                    backgroundColor: "#f5f5f5"
                }}
            >
                ← Back
            </button>

            <h2 style={{ fontSize: 28, marginBottom: 8 }}>
                {practiceItem.lemma} ({practiceItem.singularOrPlural})
            </h2>
            <p style={{ fontSize: 20, marginBottom: 16 }}>
                Preposition: <strong>{practiceItem.preposition}</strong> ({practiceItem.staticOrMotion})
            </p>

            <div style={{ display: "grid", gap: 8, marginBottom: 24 }}>
                {Object.entries(practiceItem.cases).map(([key, value]) => (
                    <button
                        key={key}
                        onClick={() => checkAnswer(key as keyof Cases)}
                        style={{
                            padding: "10px 14px",
                            borderRadius: 6,
                            border: "1px solid #ccc",
                            cursor: "pointer",
                            backgroundColor: "#fff",
                            fontSize: 16,
                            textAlign: "left",
                        }}
                    >
                        {value} ({key})
                    </button>
                ))}
            </div>

            <button
                onClick={load}
                style={{
                    padding: "10px 20px",
                    borderRadius: 6,
                    border: "none",
                    backgroundColor: "#4CAF50",
                    color: "#fff",
                    fontSize: 16,
                    cursor: "pointer",
                }}
            >
                Next
            </button>
        </div>
    );
}
