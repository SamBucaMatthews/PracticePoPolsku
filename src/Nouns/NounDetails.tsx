import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import type { NounEntry } from "../../types/Noun";
import { loadNouns } from "../dataAccess/DataAccess";

export default function NounDetails() {
    const { lemma } = useParams<{ lemma: string }>();
    const [noun, setNoun] = useState<NounEntry | null>(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        async function load() {
            const nouns = await loadNouns();
            if (lemma && nouns[lemma]) {
                setNoun(nouns[lemma]);
            }
            setLoading(false);
        }
        load();
    }, [lemma]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!noun) {
        return <p>Noun not found.</p>;
    }

    return (
        <div style={{ padding: 24, maxWidth: 480, margin: "0 auto" }}>
            <button onClick={() => navigate(-1)} style={{ marginBottom: 16 }}>
                ← Back
            </button>

            <h2>{lemma}</h2>
            <p>Gender: {noun.gender}</p>

            {noun.translations && (
                <div style={{ marginTop: 16 }}>
                    <h3>Translations</h3>
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                        <thead>
                            <tr>
                                <th style={{ textAlign: "left", borderBottom: "1px solid #ccc", padding: "4px 8px" }}>Language</th>
                                <th style={{ textAlign: "left", borderBottom: "1px solid #ccc", padding: "4px 8px" }}>Translation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {noun.translations.map(t => (
                                <tr key={t.language}>
                                    <td style={{ padding: "4px 8px", borderBottom: "1px solid #eee" }}>{t.language}</td>
                                    <td style={{ padding: "4px 8px", borderBottom: "1px solid #eee" }}>{t.translation}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            <h3>Cases</h3>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th style={{ textAlign: "left", borderBottom: "1px solid #ccc", padding: "4px 8px" }}>Case</th>
                        <th style={{ textAlign: "left", borderBottom: "1px solid #ccc", padding: "4px 8px" }}>Form</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(noun.cases).map(([caseName, word]) => (
                        <tr key={caseName}>
                            <td style={{ padding: "4px 8px", borderBottom: "1px solid #eee" }}>{caseName}</td>
                            <td style={{ padding: "4px 8px", borderBottom: "1px solid #eee" }}>{word}</td>
                        </tr>
                    ))}
                </tbody>
            </table>


        </div>
    );
}
